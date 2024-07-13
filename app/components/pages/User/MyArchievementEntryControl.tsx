import { useTranslation } from "react-i18next";
import { Input, Modal, Space, Typography, Select, Form } from "antd";
import { AlertOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { useCallback, useEffect, useState } from "react";
import { resetFetcher } from "~/utils/helper";
import { AchievementForm } from "./AchievementForm";
import { PenLine, Trash2 } from "lucide-react";

const { Text, Title } = Typography;

interface MyArchievementEntryControlProps {
  fetcher?: any;
  id: string;
  ignoreShare?: boolean;
  isOwner?: boolean;
  isForumAdmin?: boolean;
  onEditClicked?: () => void;
  type?: string;
  postType?: string;
  initialValues?: any;
}

const modalProps = {
  closeIcon: false,
  footer: null,
  modalRender: (modal: any) => modal,
} as any;

export function MyArchievementEntryControl(
  props: MyArchievementEntryControlProps
) {
  const { fetcher, id, isOwner, isForumAdmin, postType, initialValues, type } =
    props;
  const { t } = useTranslation();
  const [reason, setReason] = useState<string>("");
  const [modal, contextHolder] = Modal.useModal();
  const [reportModal, setReportModal] = useState<boolean>(false);
  const [gameInfoModal, setGameInfoModal] = useState(false);
  const [form] = Form.useForm();

  const { Option } = Select;

  const handleOpenCreateExperienceModal = () => {
    setGameInfoModal(true);
  };

  const handleLeaveParty = useCallback(() => {
    modal.confirm({
      title: `${t(`are you sure you want to delete this achievement?`)}`,
      icon: <ExclamationCircleFilled />,
      okText: t("confirm"),
      okType: "danger",
      cancelText: t("cancel"),
      maskClosable: true,
      onOk() {
        fetcher.submit(
          { id: initialValues.id },
          {
            method: "post",
            action: `/resources/delete-achievement`,
          }
        );
      },
    });
  }, [fetcher]);

  const openReportModal = () => {
    setReportModal(true);
  };

  const deletePost = useCallback(() => {
    modal.confirm({
      title: `${t(`are you sure to delete this post`)}?`,
      icon: <ExclamationCircleFilled />,
      okText: t("confirm"),
      okType: "danger",
      cancelText: t("cancel"),
      maskClosable: true,
      onOk() {
        fetcher.submit(
          { id, type: postType },
          {
            method: "delete",
            action: `/resources/delete-post`,
          }
        );
      },
    });
  }, [fetcher, id, postType]);

  const menus = [
    {
      label: (
        <Space size={10} style={{ color: "#f5222d" }}>
          <AlertOutlined />
          {t("report")}
        </Space>
      ),
      onClick: openReportModal,
    },
  ] as any[];
  if (isOwner || isForumAdmin) {
    menus.push({
      label: (
        <Space size={10}>
          <Trash2 />
          {t("delete")}
        </Space>
      ),
      onClick: deletePost,
    });
  }
  useEffect(() => {
    setReason("");
  }, [id]);

  useEffect(() => {
    if (
      fetcher &&
      fetcher.data &&
      fetcher.data.success === `report-${postType ? postType : "webboard"}` &&
      fetcher.state === "idle"
    ) {
      setReason("");
      setReportModal(false);
      resetFetcher(fetcher);
    }
  }, [fetcher, postType]);

  return (
    <>
      <Space size={5}>
        {/* {!ignoreShare && (
          <ShareDropDown copiedMessage="album url copied" postUrl={albumUrl} />
        )} */}
        {isOwner && (
          <>
            <Text
              style={{
                fontSize: 18,
                cursor: "pointer",
                color: "#ffff",
                backgroundColor: "#000000",
                padding: "0 5px",
                borderRadius: 5,
              }}
              onClick={handleOpenCreateExperienceModal}
            >
              <PenLine />
            </Text>
            <Text
              style={{
                fontSize: 18,
                cursor: "pointer",
                color: "#ffff",
                backgroundColor: "#f5222d",
                padding: "0 5px",
                borderRadius: 5,
              }}
              onClick={handleLeaveParty}
            >
              <Trash2 />
            </Text>
          </>
        )}
      </Space>
      <Modal
        {...modalProps}
        onCancel={() => setGameInfoModal(false)}
        open={gameInfoModal}
      >
        <AchievementForm
          fetcher={fetcher}
          form={form}
          action="update"
          type={type}
          onCancel={() => setGameInfoModal(false)}
          initialValues={initialValues}
        />
      </Modal>
      {contextHolder}
    </>
  );
}
