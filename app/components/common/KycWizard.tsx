/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Avatar, Badge, Flex, Modal, Space, Typography } from "antd";
import {
  CheckCircleFilled,
  DoubleRightOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { AuthContext } from "~/contexts";

import { TiltButton } from "./TiltButton";
import { KycForm } from "./KycForm";
import { useMatches } from "@remix-run/react";
import { KycBenefits } from "./KycBenefits";
import { Link } from "lucide-react";
const { Text, Title } = Typography;

interface KycWizardProps {
  children?: any;
}

export const KycWizard: React.FC<KycWizardProps> = (props: KycWizardProps) => {
  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { children } = props;
  const { user } = useContext(AuthContext);
  const [modal, setModal] = useState<boolean>(false);
  const [kycFormModal, setKycFormModal] = useState<boolean>(false);

  const modalProps = {
    closeIcon: false,
    footer: null,
    modalRender: (modal: any) => modal,
    styles: {
      body: { padding: "20px 30px", maxWidth: "100%", overflow: "auto" },
    },
  } as any;

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const openKycModal = () => {
    setKycFormModal(true);
  };

  const closeKycModal = () => {
    setKycFormModal(false);
  };

  const handleOpenKycModal = () => {
    setKycFormModal(true);
    setModal(false);
  };

  return (
    <>
      <Flex vertical align="center" justify="center" gap={10}>
        <Title level={3} style={{ margin: 0, textAlign: "center" }}>
          {t("verify identity")}
        </Title>
        <Text>
          {children
            ? children
            : t("start buy sell & anonymous after complete verification")}
        </Text>
        <Space style={{ marginBlock: 15 }} size={20}>
          <Avatar
            size={50}
            src={
              user.displayImage
                ? `${cdnUrl}/${user.displayImage}`
                : "image/placeholder.png"
            }
          />
          <DoubleRightOutlined style={{ fontSize: 20 }} />
          <Badge
            count={
              <CheckCircleFilled style={{ fontSize: 24, color: "#7a6fee" }} />
            }
            offset={[-8, 52]}
          >
            <Avatar
              size={65}
              src={
                user.displayImage
                  ? `${cdnUrl}/${user.displayImage}`
                  : "image/placeholder.png"
              }
            />
          </Badge>
        </Space>
        <TiltButton
          style={{ padding: "15px 30px" }}
          onClick={openKycModal}
          color="primary"
        >
          {t("start verification")}
        </TiltButton>
        <Flex
          justify="flex-end"
          style={{ width: "100%", marginTop: 10, cursor: "pointer" }}
          gap={5}
          onClick={openModal}
        >
          <Text>{t("KYC benefits")}</Text>
          <Link style={{ color: "#7a6fee" }} />
        </Flex>
      </Flex>
      <Modal {...modalProps} onCancel={closeModal} open={modal} width={800}>
        <KycBenefits onVerifyKyc={handleOpenKycModal} />
      </Modal>
      <Modal {...modalProps} onCancel={closeKycModal} open={kycFormModal}>
        <KycForm />
      </Modal>
    </>
  );
};
