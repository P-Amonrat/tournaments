import React from "react";
import { useTranslation } from "react-i18next";
import { Flex, List, Typography } from "antd";

import { TiltButton } from "./TiltButton";
const { Text, Title } = Typography;

interface HowToCraetePartyProps {
  onCancel: () => void;
}

export const HowToCraeteParty: React.FC<HowToCraetePartyProps> = (
  props: HowToCraetePartyProps
) => {
  const { t } = useTranslation();
  const { onCancel } = props;

  const handleAcceptAgreemnet = () => {
    onCancel();
  };

  return (
    <Flex vertical gap={20}>
      <Title level={3} style={{ margin: 0 }}>
        {t("How to Create a Party")}
      </Title>

      <List>
        <List.Item>
          <Text>{t("1. Navigate to the Party Matching menu.")}</Text>
        </List.Item>
        <List.Item>
          <Text>{t("2. Click the “Create Party” button.")}</Text>
        </List.Item>
        <List.Item>
          <Text>
            {t(
              "3. Set the party name, enter your in-game character name, choose the play mode, select the desired number of players for the party, pick the rank range for participants, and input the communication channel link for party members."
            )}
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            {t(
              "4. Optionally, you can set the party to private if the party creator wants to filter incoming players."
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
