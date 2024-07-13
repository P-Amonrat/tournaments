import { useTranslation } from "react-i18next";
import { useNavigate } from "@remix-run/react";
import { Dropdown, Input, Modal, Space, Typography, Select } from "antd";
import {
  AlertOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  MoreOutlined,
} from "@ant-design/icons";
import { useCallback, useContext, useEffect, useState } from "react";
import { TiltButton } from "~/components/common";
import { AppContext } from "~/contexts";
import { resetFetcher } from "~/utils/helper";
import { ShareDropDown } from "~/components/common/ShareDropDown";
import { Ellipsis, PenLine, Trash2, TriangleAlert } from "lucide-react";

const { Text, Title } = Typography;

interface WebboardEntryControlProps {
  fetcher?: any;
  id: string;
  ignoreShare?: boolean;
  isOwner?: boolean;
  isForumAdmin?: boolean;
  onEditClicked?: () => void;
  postType?: "comment" | "webboard";
}

export function WebboardEntryControl(props: WebboardEntryControlProps) {
  const {
    fetcher,
    id,
    ignoreShare,
    isOwner,
    isForumAdmin,
    onEditClicked,
    postType,
  } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { baseUrl } = useContext(AppContext);
  const [reason, setReason] = useState<string>("");
  const [modal, contextHolder] = Modal.useModal();
  const [reportModal, setReportModal] = useState<boolean>(false);
  const postUrl = `${baseUrl}/webboards/${id}`;
  const { Option } = Select;

  const openReportModal = () => {
    setReportModal(true);
  };

  const closeReportModal = () => {
    setReportModal(false);
  };

  const handleEditClicked = () => {
    if (onEditClicked) {
      onEditClicked();
    } else {
      navigate(`/webboards/${id}/edit`);
    }
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
          <TriangleAlert />
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
      <Space size={15}>
        <Dropdown
          arrow={false}
          menu={{ items: menus }}
          placement="bottomRight"
          trigger={["click"]}
        >
          <Text style={{ fontSize: 18, cursor: "pointer" }}>
            <Ellipsis />
          </Text>
        </Dropdown>
        {!ignoreShare && <ShareDropDown postUrl={postUrl} />}
        {isOwner && (
          <Text
            style={{ fontSize: 18, cursor: "pointer" }}
            onClick={handleEditClicked}
          >
            <PenLine />
          </Text>
        )}
      </Space>
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
