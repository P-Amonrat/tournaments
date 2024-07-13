import { useTranslation } from "react-i18next";
import { Input, Modal, Space, Typography, Select, Form } from "antd";
import {
  AlertOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import { useCallback, useContext, useEffect, useState } from "react";
import { TiltButton } from "~/components/common";
import { AppContext } from "~/contexts";
import { resetFetcher } from "~/utils/helper";
import { ShareDropDown } from "~/components/common/ShareDropDown";
import { AlbumForm } from "./AlbumForm";
import { ExperienceForm } from "./ExperiencesForm";

const { Text, Title } = Typography;

interface ExperienceEntryControlProps {
  fetcher?: any;
  id: string;
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

export function ExperienceEntryControl(props: ExperienceEntryControlProps) {
  const {
    fetcher,
    id,
    ignoreShare,
    isOwner,
    isForumAdmin,
    postType,
    initialValues,
  } = props;
  const { t } = useTranslation();
  const { baseUrl } = useContext(AppContext);
  const [reason, setReason] = useState<string>("");
  const [modal, contextHolder] = Modal.useModal();
  const [reportModal, setReportModal] = useState<boolean>(false);
  const [openCreateExperienceModal, setOpenCreateExperienceModal] =
    useState(false);
  const [form] = Form.useForm();

  const albumUrl = `${baseUrl}/album/${id}`;
  const { Option } = Select;

  const handleOpenCreateExperienceModal = () => {
    setOpenCreateExperienceModal(true);
  };

  const handleDeleteExperience = useCallback(() => {
    if (fetcher.state === "idle") {
      modal.confirm({
        title: `${t(`are you sure you want to delete this expereince?`)}`,
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
              action: `/resources/delete-experience`,
            }
          );
        },
      });
    }
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
              onClick={handleDeleteExperience}
            >
              <DeleteOutlined />
            </Text>
          </>
        )}
      </Space>
      <Modal
        {...modalProps}
        onCancel={() => setOpenCreateExperienceModal(false)}
        open={fetcher.state === "idle" && openCreateExperienceModal}
      >
        <ExperienceForm
          fetcher={fetcher}
          form={form}
          onCancel={() => setOpenCreateExperienceModal(false)}
          initialValues={initialValues}
          action="edit"
          gameId={initialValues.experienceTitleId}
        />
      </Modal>
      <Modal
        closeIcon={false}
        footer={null}
        open={reportModal}
        onCancel={closeReportModal}
      >
        <Space direction="vertical" size={20} style={{ display: "flex" }}>
          <Title level={4} style={{ margin: 0 }}>
            {t("please input reason to report")}
          </Title>
          {reasonSelect}
          {selectedReason === "Others" && (
            <Input.TextArea
              rows={4}
              onChange={onReasonChanged}
              value={reason}
              disabled={fetcher.state !== "idle"}
            />
          )}
          <TiltButton
            color="danger"
            onClick={submitReport}
            disabled={!reason.length || fetcher.state !== "idle"}
          >
            {t("report")}
          </TiltButton>
        </Space>
      </Modal>
      {contextHolder}
    </>
  );
}
