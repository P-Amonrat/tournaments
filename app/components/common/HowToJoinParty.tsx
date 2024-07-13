import React from "react";
import { useTranslation } from "react-i18next";
import { Flex, List, Typography } from "antd";

import { TiltButton } from "./TiltButton";
const { Text, Title } = Typography;

interface HowToJoinPartyProps {
  onCancel: () => void;
}

export const HowToJoinParty: React.FC<HowToJoinPartyProps> = (
  props: HowToJoinPartyProps
) => {
  const { t } = useTranslation();
  const { onCancel } = props;

  const handleAcceptAgreemnet = () => {
    onCancel();
  };

  return (
    <Flex vertical gap={20}>
      <Title level={3} style={{ margin: 0 }}>
        {t("How to Join a Party")}
      </Title>

      <List>
        <List.Item>
          <Text>{t("1. Click the “Join” button on the desired party.")}</Text>
        </List.Item>
        <List.Item>
          <Text>{t("2. Enter your in-game character name.")}</Text>
        </List.Item>
      </List>
      <Flex justify="center">
        <TiltButton color="primary" onClick={handleAcceptAgreemnet}>
          {t("close")}
        </TiltButton>
      </Flex>
    </Flex>
  );
};
