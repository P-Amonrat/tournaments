import { Form, Select, Space, Tooltip, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Globe, Lock } from "lucide-react";
const { Text } = Typography;

interface PrivateFieldSelectionProps {
  fieldName: string;
}

export function PrivateFieldSelection(props: PrivateFieldSelectionProps) {
  const { fieldName } = props;
  const { t } = useTranslation();

  return (
    <Form.Item name={fieldName} style={{ marginBottom: 0 }}>
      <Select
        style={{ width: 60 }}
        dropdownStyle={{ minWidth: 120 }}
        optionLabelProp="selectedLabel"
        options={[
          {
            selectedLabel: (
              <Tooltip placement="bottom" title={t("private")} arrow={false}>
                <Lock size={17} style={{ color: "#7a6fee" }} />
              </Tooltip>
            ),
            value: "private",
            label: (
              <Space size={10}>
                <Lock size={17} style={{ color: "#7a6fee" }} />
                <Text style={{ color: "#7a6fee" }}>{t("private")}</Text>
              </Space>
            ),
          },
          {
            selectedLabel: (
              <Tooltip placement="bottom" title={t("public")} arrow={false}>
                <Globe size={17} style={{ color: "#7a6fee" }} />
              </Tooltip>
            ),
            value: "public",
            label: (
              <Space size={10}>
                <Globe size={17} style={{ color: "#7a6fee" }} />
                <Text style={{ color: "#7a6fee" }}>{t("public")}</Text>
              </Space>
            ),
          },
        ]}
      />
    </Form.Item>
  );
}
