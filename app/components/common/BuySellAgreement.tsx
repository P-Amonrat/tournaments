import React from "react";
import { useTranslation } from "react-i18next";
import { Flex, List, Typography } from "antd";

import { TiltButton } from "./TiltButton";
import { Link } from "@remix-run/react";
const { Text, Title } = Typography;

interface BuySellAgreementProps {
  fetcher: any;
  onAcceptFinished?: () => void;
  onCancel: () => void;
}

export const BuySellAgreement: React.FC<BuySellAgreementProps> = (
  props: BuySellAgreementProps
) => {
  const { t } = useTranslation();
  const { onCancel } = props;

  const handleAcceptAgreemnet = () => {
    // fetcher.submit(null, {
    //   method: "post",
    //   action: "/resources/accept-buy-sell-agreement",
    // });
    // if (onAcceptFinished) {
    //   onAcceptFinished();
    // }
    onCancel();
  };

  return (
    <Flex vertical gap={20}>
      <Title level={3} style={{ margin: 0 }}>
        {t("Buy Sell rules")}
      </Title>

      <List>
        <List.Item>
          <Text>
            {t(
              "1. Membership posting in the buy-sell section is reserved exclusively for users who have completed the KYC process."
            )}
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            {t(
              "2. Posting any form of direct sales business, chain sharing, online work, or anything causing harm or disturbance to others is strictly prohibited."
            )}
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            {t(
              "3. Before making any transactions, please check the seller’s history at"
            )}{" "}
            <Link
              to={"https://www.blacklistseller.com/"}
              target="_blank"
              style={{ color: "#39A7FF" }}
            >
              https://www.blacklistseller.com/
            </Link>
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            {t("4. In case of fraud, report the incident online at")}{" "}
            <div>
              <Link
                to={"https://thaipoliceonline.com"}
                target="_blank"
                style={{ color: "#39A7FF" }}
              >
                https://thaipoliceonline.com
              </Link>
            </div>
            {t(
              "and contact platform administrators for information about the fraudulent party."
            )}
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            {t(
              "5. Contact platform administrators via the Facebook Page ctrl g"
            )}
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            {t(
              "Note: KYC refers to the Know Your Customer process, a standard in the financial industry to verify the identity of customers."
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
