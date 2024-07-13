import React from "react";
import { useTranslation } from "react-i18next";
import { Flex, List, Typography } from "antd";

import { TiltButton } from "./TiltButton";
const { Text, Title } = Typography;

interface WebboardUsageRulesProps {
  onCancel: () => void;
}

export const WebboardUsageRules: React.FC<WebboardUsageRulesProps> = (
  props: WebboardUsageRulesProps
) => {
  const { t } = useTranslation();
  const { onCancel } = props;

  const rules = [
    "weebboard usage rule 1",
    "weebboard usage rule 2",
    "weebboard usage rule 3",
    "weebboard usage rule 4",
    "weebboard usage rule 5",
    "weebboard usage rule 6",
    "weebboard usage rule 7",
    "weebboard usage rule 8",
    "weebboard usage rule 9",
    "weebboard usage rule 10",
    "weebboard usage rule 11",
    "weebboard usage rule 12",
    "weebboard usage rule 13",
  ] as string[];

  return (
    <Flex vertical gap={20}>
      <Title level={3} style={{ margin: 0 }}>
        {t("Webboard usage rules")}
      </Title>
      <List>
        {rules.map((rule: string, index: number) => (
          <List.Item key={`rule-${index}`}>
            <Text>{t(rule)}</Text>
          </List.Item>
        ))}
      </List>
      <Flex justify="center">
        <TiltButton color="primary" onClick={onCancel}>
          {t("close")}
        </TiltButton>
      </Flex>
    </Flex>
  );
};
