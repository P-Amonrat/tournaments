import React from "react";
import { useTranslation } from "react-i18next";
import { Flex, List, Typography } from "antd";

import { TiltButton } from "./TiltButton";
const { Text, Title } = Typography;

interface HowToStartGameProps {
  onCancel: () => void;
}

export const HowToStartGame: React.FC<HowToStartGameProps> = (
  props: HowToStartGameProps
) => {
  const { t } = useTranslation();
  const { onCancel } = props;

  const handleAcceptAgreemnet = () => {
    onCancel();
  };

  return (
    <Flex vertical gap={20}>
      <Title level={3} style={{ margin: 0 }}>
        {t("how to start playing")}
      </Title>

      <List>
        <List.Item>
          <Text>
            {t(
              "1. When all members join the party, the party status changes to offline."
            )}
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            {t(
              "2. Members can coordinate and schedule gameplay using the contact information provided in the party details."
            )}
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            {t(
              "3. Players can then gather and start playing games together using the formed party."
            )}
          </Text>
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
