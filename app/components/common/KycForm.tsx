import { useContext, useState } from "react";
import { TiltButton } from "~/components/common";
import { AuthContext } from "~/contexts";
import dayjs from "dayjs";
import {
  Checkbox,
  DatePicker,
  Divider,
  Form,
  Image,
  Input,
  Modal,
  Space,
  Typography,
} from "antd";
import { InfoCircleOutlined, LoadingOutlined } from "@ant-design/icons";
import {
  checkCitizenId,
  hasStartEndEmptySpace,
  validateBirthYear,
} from "~/utils/helper";
import { useTranslation } from "react-i18next";
const { Text, Title } = Typography;

interface KycFormProps {
  loading?: boolean;
  fetcher?: any;
  form?: any;
}

export function KycForm(props: KycFormProps) {
  const { t } = useTranslation();
  const { fetcher, form, loading } = props;
  const { user, openLoginModal } = useContext(AuthContext);
  const [laserModal, setLaserModalModal] = useState<boolean>(false);

  const handleSubmit = (values: any) => {
    const { dateOfBirth, acceptWhalletConsent, ...value } = values;
    const originalYear = dayjs(dateOfBirth).year();
    const buddistYear = originalYear + 543;
    const newDateOfBirth = dayjs(dateOfBirth).year(buddistYear);

    if (!user) {
      openLoginModal();
      return;
    }
    fetcher.submit(
      {
        action: "submit-kyc",
        data: JSON.stringify({
          ...value,
          birthday: dayjs(newDateOfBirth).format("YYYY-MM-DD"),
        }),
      },
      { method: "post" }
    );
  };

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      initialValues={user && user.profile}
      layout="vertical"
    >
      <Title level={4} style={{ margin: 0 }}>
        {t("KYC info")}
      </Title>
      <Divider style={{ marginBlock: 15 }} />
      <Form.Item
        name="firstName"
        label={
          <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
            {t("first name")}
          </Text>
        }
        normalize={(value) => value.trim()}
        rules={[
          {
            required: true,
            message: `${t("please input firstname")}`,
          },
          {
            pattern: /^[ก-๙ ]+$/,
            message: `${t("invalid thai pattern")}`,
          },
          () => ({
            validator(_, value) {
              if (!value) {
                return Promise.resolve();
              }
              if (value.length) {
                if (hasStartEndEmptySpace(value)) {
                  return Promise.reject(
                    new Error(`${t("first or last character can't be space")}`)
                  );
                }
              }
              return Promise.resolve();
            },
          }),
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lastName"
        label={
          <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
            {t("last name")}
          </Text>
        }
        colon={false}
        normalize={(value) => value.trim()}
        rules={[
          {
            required: true,
            message: `${t("please input lastname")}`,
          },
          {
            pattern: /^[ก-๙ ]+$/,
            message: `${t("invalid thai pattern")}`,
          },
          () => ({
            validator(_, value) {
              if (!value) {
                return Promise.resolve();
              }
              if (value.length) {
                if (hasStartEndEmptySpace(value)) {
                  return Promise.reject(
                    new Error(`${t("first or last character can't be space")}`)
                  );
                }
              }
              return Promise.resolve();
            },
          }),
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="dateOfBirth"
        label={
          <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
            {t("date of birth")}
          </Text>
        }
        style={{ textAlign: "left" }}
        rules={[
          {
            required: true,
            message: `${t("please select date of birth")}`,
          },
          () => ({
            validator(_, value) {
              if (!value) {
                return Promise.resolve();
              } else {
                if (!validateBirthYear) {
                  return Promise.reject(
                    new Error(`${t("you're underage, please check birthyear")}`)
                  );
                }
              }
              return Promise.resolve();
            },
          }),
        ]}
      >
        <DatePicker
          name="dateOfBirth"
          disabledDate={(current) => current && current > dayjs().endOf("day")}
          showToday={false}
          allowClear={false}
          placeholder="DD/MM/YYYY"
          format="DD/MM/YYYY"
          style={{ display: "flex" }}
        />
      </Form.Item>
      <Form.Item
        name="idCard"
        label={
          <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
            {t("citizen id")}
          </Text>
        }
        rules={[
          {
            required: true,
            message: `${t("please input citizen id")}`,
          },
          () => ({
            validator(_, value) {
              if (!value) {
                return Promise.resolve();
              }
              if (!checkCitizenId(value)) {
                return Promise.reject(
                  new Error(`${t("please input correct citizen id")}`)
                );
              }
              return Promise.resolve();
            },
          }),
        ]}
      >
        <Input type="text" maxLength={13} minLength={13} />
      </Form.Item>
      <Form.Item
        name="idCardLaser"
        labelCol={{ span: 24 }}
        label={
          <Space size={10}>
            <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
              {t("laser code")}
            </Text>
            <InfoCircleOutlined
              style={{ cursor: "pointer", color: "#9052ee" }}
              onClick={() => setLaserModalModal(true)}
            />
          </Space>
        }
        rules={[
          {
            required: true,
            message: `${t("please input laser code")}`,
          },
          () => ({
            validator(_, value) {
              if (!value) {
                return Promise.resolve();
              }
              if (value.length) {
                if (
                  !value
                    .substring(0, 2)
                    .toLowerCase()
                    .match(/^[a-z]+$/i)
                ) {
                  return Promise.reject(
                    new Error(
                      `"${value.substring(0, 2)}" ${t(
                        "first 2 characters must be alphabet"
                      )}`
                    )
                  );
                }
                if (
                  !value
                    .substring(2)
                    .toLowerCase()
                    .match(/^[0-9]+$/i)
                ) {
                  return Promise.reject(
                    new Error(`${t("last 10 characters must be numbers")}`)
                  );
                }
                if (value.length < 12) {
                  return Promise.reject(
                    new Error(`${t("invalid laser idcard length")}`)
                  );
                }
                if (value.indexOf("-") > -1) {
                  return Promise.reject(new Error(`${t("please remove -")}`));
                }
              }
              return Promise.resolve();
            },
          }),
        ]}
      >
        <Input maxLength={12} placeholder={`${t("please do not input '-'")}`} />
      </Form.Item>
      <Form.Item
        key="acceptWhalletConsent"
        name="acceptWhalletConsent"
        valuePropName="checked"
        rules={[
          {
            required: true,
            message: `${t("please agree to this field")}`,
          },
        ]}
      >
        <Checkbox>
          <Text style={{ fontSize: "0.9em" }}>
            {t("you agree to allow whallet to send KYC data to DOPA")}
          </Text>
        </Checkbox>
      </Form.Item>
      <Modal
        open={laserModal}
        closable={false}
        footer={false}
        style={{ display: "flex", justifyContent: "center" }}
        onCancel={() => setLaserModalModal(false)}
      >
        <Image width={400} preview={false} src="/image/laser.png" />
      </Modal>
      {loading ? (
        <TiltButton color="secondary">
          <LoadingOutlined style={{ fontSize: 24 }} spin />
        </TiltButton>
      ) : (
        <TiltButton
          color="primary"
          onClick={() => form.submit()}
          style={{ marginTop: 20 }}
        >
          {t("submit")}
        </TiltButton>
      )}
    </Form>
  );
}
