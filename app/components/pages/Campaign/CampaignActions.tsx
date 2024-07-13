import {
  Card,
  Divider,
  Flex,
  Typography,
  Image,
  Modal,
  Space,
  List,
} from "antd";
import { useTranslation } from "react-i18next";
import { TiltButton } from "~/components/common";
import { useEffect, useState } from "react";
const { Text, Title } = Typography;

interface CampaignActionsProps {
  onSubmit: (withLogin: boolean) => void;
}

const modalProps = {
  closeIcon: false,
  footer: null,
  modalRender: (modal: any) => modal,
  styles: {
    body: { padding: "3px 5px", maxWidth: "100%" },
  },
} as any;

export function CampaignActions(props: CampaignActionsProps) {
  const { t } = useTranslation();
  const { onSubmit } = props;
  const [rareModal, setRareModal] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || "";

    // Check for common patterns in the userAgent string to determine device type
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);

    setIsMobile(isMobile);
  }, []);

  return (
    <Card
      bordered={false}
      style={{
        // position: "relative",
        maxWidth: 700,
        marginInline: "auto",
        color: "#fff",
        backgroundColor: "rgba(0,0,0,0.8)",
        backgroundImage: `url('/image/campaign-background-2.png')`,
        backgroundSize: "cover",
        borderRadius: 30,
      }}
      bodyStyle={{
        paddingBlock: !isMobile ? 120 : 70,
        paddingInline: "6%",
      }}
    >
      <Flex
        vertical
        justify="center"
        gap={50}
        style={{ paddingInline: "7.5%", textAlign: "center" }}
      >
        <Title
          style={{
            margin: 0,
            color: "inherit",
            fontSize: !isMobile ? undefined : 20,
          }}
          level={2}
        >
          {t("finished quiz already, let's see who you look alike") + "!"}
        </Title>
        {/* <div style={{ position: "relative" }}> */}
        <TiltButton
          color="pink"
          onClick={() => onSubmit(true)}
          style={{
            width: "100%",
            fontSize: !isMobile ? 24 : 19,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -60,
              right: 0,
              width: "65px",
              height: "65px",
            }}
          >
            <Image
              src="/image/CTRLG-frame-reward.png"
              alt="Button Image"
              preview={false}
              onClick={(e) => {
                e.stopPropagation();
                setRareModal(true);
              }}
            />
          </div>
          {t("connect with CTRL G account to get reward and display result")}
        </TiltButton>

        {/* </div> */}
        <Divider plain style={{ marginBlock: 0 }}>
          <Title
            style={{
              margin: 0,
              color: "#fff",
            }}
            level={5}
          >
            {t("or")}
          </Title>
        </Divider>
        <Card
          onClick={() => onSubmit(false)}
          style={{
            backgroundColor: "transparent",
            borderColor: "#fff",
            borderRadius: 40,
            cursor: "pointer",
          }}
          bodyStyle={{ padding: 10 }}
        >
          <Text style={{ fontSize: 24, color: "#fff" }}>
            {t("display result immediately")}
          </Text>
        </Card>
      </Flex>
      <Modal
        {...modalProps}
        onCancel={() => setRareModal(false)}
        open={rareModal}
      >
        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Title level={5}>{t("have a chance to get rare card")}</Title>
          <Image src={"/image/CTRLG-frame-reward.png"} width={"30%"} />
          <div
            style={{
              margin: "0 50px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Title
              level={5}
              style={{
                marginTop: "10px",
                textAlign: "left",
                textDecoration: "underline",
              }}
            >
              {t("rare rules")}
            </Title>
            <List style={{ marginLeft: "25px", textAlign: "center" }}>
              <List.Item>
                <Text>{t("1. rule rare card")}</Text>
              </List.Item>
              <List.Item>
                <Text>{t("2. rule rare card")}</Text>
              </List.Item>
              <List.Item>
                <Text>{t("3. rule rare card")}</Text>
              </List.Item>
              <List.Item>
                <Text style={{ marginRight: "25px" }}>
                  {t("4. rule rare card")}
                </Text>
              </List.Item>
            </List>
          </div>
          <TiltButton
            color="primary"
            onClick={() => setRareModal(false)}
            style={{ marginTop: "10px" }}
          >
            <Space>{t("close")}</Space>
          </TiltButton>
        </div>
      </Modal>
    </Card>
  );
}
