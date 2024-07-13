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
import { AppContext, AuthContext } from "~/contexts";
import { resetFetcher } from "~/utils/helper";
import { ShareDropDown } from "~/components/common/ShareDropDown";
import { AlbumForm } from "./AlbumForm";

const { Text, Title } = Typography;

interface AlbumEntryControlProps {
  fetcher?: any;
  id: string;
  userUuid: string;
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

export function AlbumEntryControl(props: AlbumEntryControlProps) {
  const {
    fetcher,
    id,
    userUuid,
    ignoreShare,
    isOwner,
    isForumAdmin,
    postType,
    initialValues,
  } = props;
  const { t } = useTranslation();
  const { baseUrl } = useContext(AppContext);
  const { user } = useContext(AuthContext);
  const [reason, setReason] = useState<string>("");
  const [modal, contextHolder] = Modal.useModal();
  const [reportModal, setReportModal] = useState<boolean>(false);
  const [openCreateAlbumModal, setOpenCreateAlbumModal] = useState(false);
  const [form] = Form.useForm();

  const albumUrl = `${baseUrl}/users/${userUuid}/my-album/${id}`;
  const { Option } = Select;

  const handleOpenCreateAlbumModal = () => {
    setOpenCreateAlbumModal(true);
  };

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

  const handleDeleteAlbum = useCallback(() => {
    modal.confirm({
      title: `${t(`are you sure you want to delete this album?`)}`,
      icon: <ExclamationCircleFilled />,
      okText: t("confirm"),
      okType: "danger",
      cancelText: t("cancel"),
      maskClosable: true,
      onOk() {
        fetcher.submit(
          { id: initialValues.id, uuid: user.uuid },
          {
            method: "post",
            action: `/resources/delete-album`,
          }
        );
      },
    });
  }, [fetcher]);

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
        {!ignoreShare && (
          <ShareDropDown
            copiedMessage={t("album url copied")}
            postUrl={albumUrl}
          />
        )}
        {isOwner && (
          <>
            <Text
              style={{ fontSize: 18, cursor: "pointer" }}
              onClick={handleOpenCreateAlbumModal}
            >
              <EditOutlined />
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
              onClick={handleDeleteAlbum}
            >
              <DeleteOutlined />
            </Text>
          </>
        )}
      </Space>
      <Modal
        {...modalProps}
        onCancel={() => setOpenCreateAlbumModal(false)}
        open={openCreateAlbumModal}
      >
        <AlbumForm
          fetcher={fetcher}
          form={form}
          onCancel={() => setOpenCreateAlbumModal(false)}
          initialValues={initialValues}
          action="edit"
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
