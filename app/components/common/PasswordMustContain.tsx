import { Card, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";
const { Text } = Typography;

interface PassswordMustContainProps {
  validator: any;
}

export function PassswordMustContain(props: PassswordMustContainProps) {
  const { validator } = props;
  const { t } = useTranslation();
  const {
    hasUpperCase,
    hasLowerCase,
    hasNumber,
    hasSpecialCharacter,
    hasLeast8,
    passwordMatch,
  } = validator;

  return (
    <Card style={{ marginTop: "20px" }}>
      <Space direction="vertical" style={{ fontSize: "0.8em" }}>
        <Text type={hasUpperCase ? "success" : "secondary"}>
          {hasUpperCase ? "✓" : "○"}&nbsp;&nbsp;{t("Uppercase letter (A-Z)")}
        </Text>
        <Text type={hasLowerCase ? "success" : "secondary"}>
          {hasLowerCase ? "✓" : "○"}&nbsp;&nbsp;{t("Lowercase letter (a-z)")}
        </Text>
        <Text type={hasNumber ? "success" : "secondary"}>
          {hasNumber ? "✓" : "○"}&nbsp;&nbsp;{t("Number (0-9)")}
        </Text>
        <Text type={hasSpecialCharacter ? "success" : "secondary"}>
          {hasSpecialCharacter ? "✓" : "○"}&nbsp;&nbsp;
          {t("Special character")}&nbsp;&nbsp;Ex. ~`!@#$%_^&*
        </Text>
        <Text type={hasLeast8 ? "success" : "secondary"}>
          {hasLeast8 ? "✓" : "○"}&nbsp;&nbsp;{t("Has at least 8 characters")}
        </Text>
        <Text type={passwordMatch ? "success" : "secondary"}>
          {passwordMatch ? "✓" : "○"}&nbsp;&nbsp;{t("Passwords match")}
        </Text>
      </Space>
    </Card>
  );
}
