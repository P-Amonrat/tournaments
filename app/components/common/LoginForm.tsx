import dayjs from "dayjs";
import { useCallback, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "@remix-run/react";
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Image,
  Input,
  Row,
  Space,
  Statistic,
  theme,
  Typography,
} from "antd";
import { ArrowLeftOutlined, LoadingOutlined } from "@ant-design/icons";
import OTPInput from "react-otp-input";
import { PassswordMustContain, TiltButton } from "~/components/common";
import { isEmail, isPhone, validatePassword } from "~/utils/helper";
import { AppContext } from "~/contexts";
const { Countdown } = Statistic;
const { useToken } = theme;
const { Text } = Typography;

interface LoginFormProps {
  fetcher: any;
  loading?: boolean;
}

export function LoginForm(props: LoginFormProps) {
  const otpTime = 180;
  const { t } = useTranslation();
  const location = useLocation();
  const { token } = useToken();
  const { scheme } = useContext(AppContext);
  const [form] = Form.useForm();
  const { fetcher, loading } = props;
  const [passwordValid, setPasswordValid] = useState<any>(
    validatePassword("", "")
  );
  const [step, setStep] = useState<any>({ type: "credential" });
  const [verifyCredential, setVerifyCredential] = useState<string>();
  const [otp, setOtp] = useState<string>("");
  const [enableResendOtp, setEnableResendOtp] = useState<boolean>(false);
  const [otpDeadline, setOtpDeadline] = useState<any>(
    dayjs().add(otpTime, "seconds")
  );
  const [isFacebookBrowser, setIsFacebookBrowser] = useState(false);
  const [isLineBrowser, setIsLineBrowser] = useState(false);

  const handleResendOtp = useCallback(() => {
    if (enableResendOtp) {
      fetcher.submit(
        {
          credential: form.getFieldValue("credential"),
          action: "resend-otp",
        },
        { method: "post", action: "/resources/login-verify" }
      );
      setEnableResendOtp(false);
      setOtpDeadline(dayjs().add(otpTime, "seconds"));
    }
  }, [enableResendOtp, form]);

  const handleForgotPassword = () => {
    fetcher.submit(
      { email: verifyCredential },
      { method: "post", action: "/resources/forgot-password" }
    );
  };

  const handleVerifyAccount = useCallback(() => {
    const credential = form.getFieldValue("credential");
    setVerifyCredential(credential);
    // To check if user exist or not
    if (isEmail(credential) || isPhone(credential)) {
      fetcher.submit(
        {
          credential: form.getFieldValue("credential"),
        },
        { method: "post", action: "/resources/login-verify" }
      );
    }
  }, [form]);

  const handleSubmitOtp = useCallback(() => {
    if (otp && otp.length == 6 && step && step.refCode) {
      fetcher.submit(
        {
          action: "verify-otp",
          otpNum: otp,
          refCode: step.refCode,
          credential: verifyCredential,
        },
        { method: "post", action: "/resources/login-verify" }
      );
    }
  }, [otp, step]);

  const handleSocialLogin = (channel: string) => {
    fetcher.submit(
      {
        channel: channel,
        currentPath:
          location.search && location.search.length > 0
            ? `${location.pathname}${location.search}`
            : location.pathname,
      },
      { method: "post", action: "/resources/login" }
    );
  };

  const handleFormSubmit = (values: any) => {
    fetcher.submit(
      {
        ...values,
        currentPath:
          location.search && location.search.length > 0
            ? `${location.pathname}${location.search}`
            : location.pathname,
      },
      { method: "post", action: "/resources/login" }
    );
  };

  const handleFormChange = (changedValues: any, allValues: any) => {
    const validator = validatePassword(
      allValues.password,
      allValues.confirmPassword
    );
    setPasswordValid(validator);
  };

  useEffect(() => {
    const userAgent = navigator.userAgent || "";

    setIsFacebookBrowser(
      userAgent.includes("FBAN") || userAgent.includes("FBAV")
    );
    setIsLineBrowser(userAgent.includes("Line") || userAgent.includes("line"));
  }, []);

  useEffect(() => {
    if (fetcher && fetcher.data) {
      const { credentialExist, refCode, otpVerified, sendForgotPassword } =
        fetcher.data;
      if (credentialExist) {
        setStep({ type: "password", action: "login" });
      } else if (!credentialExist && otpVerified) {
        setStep({ type: "password", action: "register" });
      } else if (refCode) {
        setStep({ type: "otp", refCode });
        setOtpDeadline(dayjs().add(otpTime, "seconds"));
        setOtp("");
      } else if (sendForgotPassword) {
        setStep({ type: "forgot-password", action: "forgot-password" });
      }
    }
  }, [fetcher]);

  return (
    <Space direction="vertical" size={20} style={{ display: "flex" }}>
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <Image
          preview={false}
          src={`/image/logo-with-text-${scheme}.png`}
          width={160}
        />
      </div>
      {!step ||
        (step.type && step.type === "credential" && (
          <Space direction="vertical" size={20} style={{ display: "flex" }}>
            <Card
              style={{
                backgroundColor: "#fff",
                cursor:
                  isFacebookBrowser || isLineBrowser ? "default" : "pointer",
                opacity: isFacebookBrowser || isLineBrowser ? 0.4 : 1,
                border: "1px solid #dfdfdf",
              }}
              bodyStyle={{ padding: 10 }}
              onClick={() =>
                !loading && !isFacebookBrowser && !isLineBrowser
                  ? handleSocialLogin("google")
                  : undefined
              }
            >
              <Space
                size={10}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image preview={false} src="/image/google.png" width={24} />
                <Text
                  style={{ color: "#221f20", fontSize: 16, fontWeight: 600 }}
                >
                  {t("login with Google")}
                </Text>
              </Space>
            </Card>
            <Card
              bordered={false}
              style={{ backgroundColor: "#5cc43d", cursor: "pointer" }}
              bodyStyle={{ padding: 10 }}
              onClick={() => (!loading ? handleSocialLogin("line") : undefined)}
            >
              <Space
                size={10}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image preview={false} src="/image/line.png" width={24} />
                <Text style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>
                  {t("login with LINE")}
                </Text>
              </Space>
            </Card>
            <Divider plain style={{ marginBlock: 0 }}>
              {t("or")}
            </Divider>
          </Space>
        ))}
      <Form
        form={form}
        preserve
        onFinish={handleFormSubmit}
        onValuesChange={handleFormChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
        layout="vertical"
      >
        <Form.Item
          key="credential"
          name="credential"
          style={step.type !== "credential" ? { display: "none" } : {}}
          rules={[
            () => ({
              validator(_, value) {
                if (!value) {
                  return Promise.resolve();
                }
                if (value.length) {
                  if (!isEmail(value)) {
                    return Promise.reject(
                      new Error(`${t("please input correct email")}`)
                    );
                  }
                }
                return Promise.resolve();
              },
            }),
          ]}
          label={
            <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
              {t("email")}
            </Text>
          }
        >
          <Input disabled={loading} />
        </Form.Item>
        {step && step.type === "credential" && (
          <>
            <TiltButton
              color="primary"
              onClick={handleVerifyAccount}
              style={{ marginTop: 20 }}
            >
              {t("continue")}
            </TiltButton>
            <div
              style={{ textAlign: "center", marginTop: 20, paddingInline: 20 }}
            >
              <Text
                type="secondary"
                style={{ fontSize: "0.8em", fontWeight: 600 }}
              >
                {t("By creating an account, I agress to CTRL G")}
              </Text>
              <br />
              <Text
                type="secondary"
                style={{ fontSize: "0.8em", fontWeight: 600 }}
              >
                <a
                  href="/terms-of-service"
                  target="_blank"
                  style={{ color: "#7a6fee" }}
                >
                  {t("Terms of Service")}
                </a>
                {` ${t("and")} `}
                <Link to="/" target="_blank" style={{ color: "#7a6fee" }}>
                  {t("Privacy Policy")}
                </Link>
              </Text>
            </div>
            <div
              style={{ textAlign: "center", marginTop: 10, paddingInline: 20 }}
            >
              <Text
                type="secondary"
                style={{ fontSize: "0.8em", fontWeight: 600, marginTop: 20 }}
              >
                {t(
                  "By continuing your information will be used to create account on CTRL G and whallet platform"
                )}
              </Text>
            </div>
          </>
        )}
        {step && step.type === "otp" && step.refCode && (
          <>
            <Typography.Title level={5}>
              {t("please enter otp")}
            </Typography.Title>
            <OTPInput
              shouldAutoFocus
              value={otp}
              onChange={setOtp}
              numInputs={6}
              inputType="number"
              renderSeparator={<span style={{ width: 10 }} />}
              renderInput={(props) => {
                return (
                  <input
                    {...props}
                    disabled={loading}
                    style={{
                      width: "16.66%",
                      maxWidth: "50px",
                      height: 60,
                      color: token.colorTextBase,
                      backgroundColor: "transparent",
                      fontSize: 20,
                      textAlign: "center",
                      borderRadius: 12,
                      border: `1px solid ${token.colorBorder}`,
                    }}
                  />
                );
              }}
            />
            <TiltButton
              color="primary"
              onClick={handleSubmitOtp}
              style={{ marginBottom: 20, marginTop: 30 }}
            >
              {t("continue")}
            </TiltButton>
            <Row>
              <Col flex="auto">
                <Text>{`${t("OTP ref")} : ${step.refCode}`}</Text>
              </Col>
              <Col flex="none">
                {enableResendOtp ? (
                  <Text
                    onClick={handleResendOtp}
                    style={{ cursor: "pointer", color: "#7a6fee" }}
                  >
                    {t("Resend")}
                  </Text>
                ) : (
                  <Space size={5}>
                    <Countdown
                      value={otpDeadline}
                      onFinish={() => setEnableResendOtp(true)}
                      format="ss"
                      valueStyle={{
                        fontSize: "14px",
                        color: token.colorTextBase,
                      }}
                    />
                    <Text type="secondary">s</Text>
                  </Space>
                )}
              </Col>
            </Row>
          </>
        )}

        {step && step.type === "password" && (
          <>
            {step.action === "login" && (
              <Space
                size={5}
                style={{ cursor: "pointer", marginBottom: 20 }}
                onClick={(e: any) => setStep({ type: "credential" })}
              >
                <ArrowLeftOutlined />
                <Text>{t("back")}</Text>
              </Space>
            )}
            <Form.Item
              name="password"
              label={
                <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                  {t("password")}
                </Text>
              }
              rules={[
                { required: true, message: `${t("please input password")}` },
              ]}
            >
              <Input
                type="password"
                placeholder="********"
                disabled={loading}
              />
            </Form.Item>
            {step.action === "register" && (
              <>
                <Form.Item
                  name="confirmPassword"
                  label={t("confirm password")}
                  rules={[
                    {
                      required: true,
                      message: `${t("please confirm your password")}`,
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(`${t("password doesn't match")}`)
                        );
                      },
                    }),
                  ]}
                >
                  <Input
                    type="password"
                    placeholder="********"
                    disabled={loading}
                  />
                </Form.Item>
                <PassswordMustContain validator={passwordValid} />
              </>
            )}
            {step.action === "login" && (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button type="text" onClick={handleForgotPassword}>
                  <Text style={{ color: "blue" }}>{t("forgot password?")}</Text>
                </Button>
              </div>
            )}
            {loading ? (
              <TiltButton color="secondary">
                <LoadingOutlined style={{ fontSize: 24 }} spin />
              </TiltButton>
            ) : (
              <TiltButton
                color="primary"
                onClick={() => form.submit()}
                style={{ marginTop: 15 }}
              >
                {step.action === "register" ? t("register") : t("login")}
              </TiltButton>
            )}
          </>
        )}

        {step && step.type === "forgot-password" && (
          <>
            {step.action === "forgot-password" && (
              <Space
                size={5}
                style={{ cursor: "pointer", marginBottom: 20 }}
                onClick={(e: any) => setStep({ type: "credential" })}
              >
                <ArrowLeftOutlined />
                <Text>{t("back")}</Text>
              </Space>
            )}
            <Typography.Title level={4} style={{ textAlign: "center" }}>
              {t(
                "reset password email has been sent, please return to ctrlg after reset success"
              )}
            </Typography.Title>
          </>
        )}
      </Form>
      <Space size={10} style={{ display: "flex", justifyContent: "center" }}>
        <Text>{t("powered by")}</Text>
        <Image preview={false} src="/image/whallet.png" width={100} />
      </Space>
    </Space>
  );
}
