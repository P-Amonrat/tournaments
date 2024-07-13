import { useTranslation } from "react-i18next";
import { Input, Modal, Space, Typography, Select, Form } from "antd";
import {
  AlertOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import { useCallback, useEffect, useState } from "react";
import { TiltButton } from "~/components/common";
import { resetFetcher } from "~/utils/helper";
import { ExperienceForm } from "./ExperiencesForm";
import { UserGameForm } from "./UserGameForm";

const { Text, Title } = Typography;

interface MyGameEntryControlProps {
  fetcher?: any;
  id: string;
  game?: any;
  games: any[];
  ignoreShare?: boolean;
  isOwner?: boolean;
  isForumAdmin?: boolean;
  onEditClicked?: () => void;
  postType?: string;
  initialValues?: any;
}

const modalProps = {
  closeIcon: false,
  footer: null,
  modalRender: (modal: any) => modal,
} as any;

export function MyGameEntryControl(props: MyGameEntryControlProps) {
  const {
    fetcher,
    id,
    isOwner,
    isForumAdmin,
    postType,
    initialValues,
    game,
    games,
  } = props;
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

  const handleDeleteGame = useCallback(() => {
    modal.confirm({
      title: `${t(`are you sure you want to delete this rank?`)}`,
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
            action: `/resources/delete-user-in-game`,
          }
        );
      },
    });
  }, [fetcher]);

  const openReportModal = () => {
    setReportModal(true);
  };

  const closeReportModal = () => {
    setReportModal(false);
  };

  const onReasonChanged = (e: any) => {
    setReason(e.target.value);
  };

  const [selectedReason, setSelectedReason] = useState<string>("");

  const reasonOptions = [
    { label: " Inappropriate Content", value: "Inappropriate Content" },
    { label: "Violence", value: "Violence" },
    { label: "Harassment", value: "Harassment" },
    { label: " False Information", value: "False Information" },
    { label: "Spam", value: "Spam" },
    { label: "Unauthorized Sales", value: "Unauthorized Sales" },
    { label: "Others", value: "Others" },
  ];

  const onReasonSelected = (value: string) => {
    if (value !== "Others") {
      setReason(value);
    } else {
      setReason("");
    }
    setSelectedReason(value);
  };

  const reasonSelect = (
    <Select
      style={{ width: "100%" }}
      onChange={onReasonSelected}
      value={selectedReason ? selectedReason : undefined}
      disabled={fetcher.state !== "idle"}
      placeholder={t("select reason")}
      listHeight={300}
    >
      {reasonOptions.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );

  const submitReport = useCallback(() => {
    if (reason.length > 0) {
      fetcher.submit(
        { reason, id, type: postType },
        {
          method: "post",
          action: `/resources/report-post`,
        }
      );
    }
  }, [fetcher, postType, reason]);

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
          <DeleteOutlined />
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
      <Space size={15}>
        {/* {!ignoreShare && (
          <ShareDropDown copiedMessage="album url copied" postUrl={albumUrl} />
        )} */}
        {isOwner && (
          <>
            <Text
              style={{ fontSize: 18, cursor: "pointer" }}
              onClick={handleOpenCreateExperienceModal}
            >
              <EditOutlined />
            </Text>
            <Text
              style={{ fontSize: 18, cursor: "pointer", color: "#f5222d" }}
              onClick={handleDeleteGame}
            >
              <DeleteOutlined />
            </Text>
          </>
        )}
      </Space>
      <Modal
        {...modalProps}
        onCancel={() => setGameInfoModal(false)}
        open={gameInfoModal}
      >
        <UserGameForm
          fetcher={fetcher}
          form={form}
          game={game}
          games={games}
          action="update"
          onCancel={() => setGameInfoModal(false)}
          initialValues={initialValues}
        />
      </Modal>
      {contextHolder}
    </>
  );
}
