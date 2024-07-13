import { Button, Form, Input, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";

interface SigninFormProps {
  disabled?: boolean;
  onSubmit: (values: any) => void;
}

export const SigninForm: React.FC<SigninFormProps> = (
  props: SigninFormProps
) => {
  const { disabled, onSubmit } = props;
  const { t } = useTranslation("");

  return (
    <Form
      layout="vertical"
      onFinish={onSubmit}
      disabled={disabled}
      style={{
        textAlign: "center",
      }}
    >
      <Form.Item name="mobile" label={t("mobile")}>
        <Input type="mobile" placeholder={t("mobile")} />
      </Form.Item>

      <Form.Item name="password" label={t("password")}>
        <Input.Password type="password" placeholder={t("password")} />
      </Form.Item>

      <Button block htmlType="submit" type="primary" disabled={disabled}>
        {t("signin")}
      </Button>
      <Row
        justify="center"
        style={{
          paddingTop: "12px",
        }}
      >
        <Typography.Link href="/forgot-password">
          {t("forgot_password_?")}
        </Typography.Link>
      </Row>
    </Form>
  );
};
