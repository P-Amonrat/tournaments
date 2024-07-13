import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "@remix-run/react";
import { Card, Flex, Modal, Space, Typography } from "antd";
import { AppContext } from "~/contexts";
import { BuySellAgreement, WebboardUsageRules } from "~/components/common";

const { Text, Title } = Typography;

interface WebboardTagsProps {
  fetcher: any;
  data: any[];
  mobileStyle?: boolean;
}

export function WebboardTags(props: WebboardTagsProps) {
  const { scheme } = useContext(AppContext);
  const { data, fetcher, mobileStyle } = props;
  const { t } = useTranslation();
  const [buySellModal, setBuySellModal] = useState<boolean>(false);
  const [webboardRules, setWebboardRules] = useState<boolean>(false);

  const modalProps = {
    closeIcon: false,
    footer: null,
    modalRender: (modal: any) => modal,
    styles: {
      body: { padding: "20px 30px" },
    },
  } as any;

  const openWebboardRules = () => {
    setWebboardRules(true);
  };

  const closeWebboardRules = () => {
    setWebboardRules(false);
  };

  const openBuySellModal = () => {
    setBuySellModal(true);
  };

  const closeBuySellModal = () => {
    setBuySellModal(false);
  };

  useEffect(() => {
    if (
      fetcher &&
      fetcher.data &&
      fetcher.data.success &&
      fetcher.data.success === "accept-buy-sell-agreement" &&
      fetcher.state === "idle"
    ) {
      setBuySellModal(false);
    }
  }, [fetcher]);

  return (
    <>
      <Flex vertical gap={20}>
        <Card
          bordered={false}
          style={{
            backgroundColor: mobileStyle
              ? "transparent"
              : scheme === "light"
              ? "#ebebeb"
              : "#0f0e0e",
            borderRadius: 10,
            boxShadow: "none",
          }}
          bodyStyle={{
            padding: mobileStyle ? 0 : 30,
          }}
        >
          <Space direction="vertical" size={20} style={{ display: "flex" }}>
            <Title level={mobileStyle ? 5 : 4} style={{ marginTop: 0 }}>
              {t("popular tags")}
            </Title>
            {data.map((tag: any) => (
              <Link to={`/tags/${tag.id}`} key={tag.name}>
                <Space
                  direction="vertical"
                  size={5}
                  style={{ display: "flex", cursor: "pointer" }}
                >
                  <Text
                    style={{
                      fontStyle: "italic",
                      fontWeight: 500,
                      fontSize: "1.2em",
                    }}
                  >
                    #{tag.name}
                  </Text>
                  {!mobileStyle && <Text>{`${tag.count} ${t("posts")}`}</Text>}
                </Space>
              </Link>
            ))}
          </Space>
        </Card>
        <Flex
          vertical
          gap={10}
          justify="center"
          style={{ textAlign: "center" }}
        >
          <Text
            style={{ cursor: "pointer", fontWeight: 600 }}
            onClick={openBuySellModal}
          >
            {t("buy sell conditions")}
          </Text>
          <Text
            style={{ cursor: "pointer", fontWeight: 600 }}
            onClick={openWebboardRules}
          >
            {t("webboard usage rules")}
          </Text>
        </Flex>
      </Flex>
      <Modal {...modalProps} onCancel={closeBuySellModal} open={buySellModal}>
        <BuySellAgreement fetcher={fetcher} onCancel={closeBuySellModal} />
      </Modal>
      <Modal {...modalProps} onCancel={closeWebboardRules} open={webboardRules}>
        <WebboardUsageRules onCancel={closeWebboardRules} />
      </Modal>
    </>
  );
}
