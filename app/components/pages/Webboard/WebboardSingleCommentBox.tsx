import { useCallback, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Col,
  Divider,
  Flex,
  Modal,
  Result,
  Row,
  Space,
  Switch,
  Tooltip,
  Typography,
  theme,
} from "antd";
import { LoadingOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { AuthContext } from "~/contexts";
import {
  KycWizard,
  QuotedComment,
  TextEditor,
  TiltButton,
  UserAvatar,
} from "~/components/common";
import { useMatches } from "@remix-run/react";
const { Text, Title } = Typography;

const { useToken } = theme;

interface WebboardSingleCommentBoxProps {
  disabled?: boolean;
  editMode?: boolean;
  fetcher: any;
  initialData?: any;
  onCancel?: () => void;
  postId?: string | number;
  refComment?: any;
}

export function WebboardSingleCommentBox(props: WebboardSingleCommentBoxProps) {
  const {
    disabled,
    editMode,
    fetcher,
    initialData,
    onCancel,
    postId,
    refComment,
  } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { user } = useContext(AuthContext);
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [isReply, setIsReply] = useState<boolean>(false);
  const [content, setContent] = useState<any>(
    initialData && initialData.content ? initialData.content : ""
  );
  const [anonymous, setAnonymous] = useState<boolean>(
    initialData && initialData.anonymous ? initialData.anonymous : false
  );
  const [quotedComment, setQuotedComment] = useState<any>(refComment);
  const [kycWizardModal, setKycWizardModal] = useState<boolean>(false);

  const onSubmit = useCallback(
    (e: any) => {
      if (postId) {
        fetcher.submit(
          {
            postId: postId,
            comment: JSON.stringify({
              content: content,
              quotedCommentId: quotedComment ? quotedComment.id : null,
              anonymous: anonymous,
            }),
          },
          {
            method: "post",
            action: `/resources/create-comment`,
          }
        );
      } else if (initialData) {
        fetcher.submit(
          {
            commentId: initialData.id,
            comment: JSON.stringify({
              content: content,
              quotedCommentId: quotedComment ? quotedComment.id : null,
              anonymous: anonymous,
            }),
          },
          {
            method: "put",
            action: `/resources/update-comment`,
          }
        );
      }
      setContent("");
    },
    [anonymous, content, fetcher, initialData, postId, quotedComment]
  );

  const openKycWizardModal = () => {
    setKycWizardModal(true);
  };

  const closeKycWizardModal = () => {
    setKycWizardModal(false);
  };

  const handleAnonymousChanged = (checked: boolean, e: any) => {
    e.stopPropagation();
    setAnonymous(checked);
  };

  useEffect(() => {
    if (refComment) {
      setQuotedComment(refComment);
    } else {
      setQuotedComment(null);
    }
  }, [refComment]);

  useEffect(() => {
    if (disabled) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [disabled]);

  useEffect(() => {
    if (quotedComment) {
      setIsReply(true);
    } else {
      setIsReply(false);
    }
  }, [quotedComment]);

  return (
    <Row gutter={10}>
      {!initialData && (
        <Col flex="none">
          <UserAvatar
            display={
              user.displayImage
                ? `${cdnUrl}/${user.displayImage}`
                : "image/placeholder.png"
            }
            size={50}
          />
        </Col>
      )}
      <Col flex="auto">
        {quotedComment && (
          <>
            <Flex
              justify="space-between"
              align="center"
              style={{ marginBottom: 20 }}
            >
              <Title level={5} style={{ margin: 0 }}>
                {t("reply to")}
              </Title>
              {/* <Text
                type="danger"
                onClick={() => setQuotedComment(null)}
                style={{ cursor: "pointer" }}
              >
                <DeleteOutlined />
              </Text> */}
            </Flex>
            <QuotedComment data={quotedComment} />
            <Divider />
          </>
        )}
        {!loading ? (
          <Flex vertical gap={20}>
            <TextEditor
              id="comment"
              fetcher={fetcher}
              onChange={setContent}
              initialValues={
                initialData && initialData.content ? initialData.content : ""
              }
            />
            <Flex justify="space-between" align="center">
              <Space size={10}>
                <TiltButton
                  color="primary"
                  disabled={
                    !content.length || loading || fetcher.state !== "idle"
                  }
                  onClick={onSubmit}
                >
                  {t("comment")}
                </TiltButton>
                {onCancel && (
                  <TiltButton color="secondary" onClick={onCancel}>
                    {t("cancel")}
                  </TiltButton>
                )}
              </Space>
              {!editMode && (
                <Space size={10}>
                  <Text>{t("anonymous")}</Text>
                  <Switch
                    checked={anonymous}
                    disabled={!user.isDopaVerified}
                    onChange={handleAnonymousChanged}
                  />
                  {!user.isDopaVerified && (
                    <Tooltip
                      placement="top"
                      arrow={false}
                      title={t(
                        'KYC to access "buy sell" and "tournament" rooms'
                      )}
                    >
                      <QuestionCircleOutlined
                        onClick={openKycWizardModal}
                        style={{ cursor: "pointer", color: "#7a6fee" }}
                      />
                    </Tooltip>
                  )}
                  {!user.isDopaVerified && (
                    <Modal
                      open={kycWizardModal}
                      closable={false}
                      footer={false}
                      onCancel={closeKycWizardModal}
                    >
                      <KycWizard />
                    </Modal>
                  )}
                </Space>
              )}
            </Flex>
          </Flex>
        ) : (
          <Result icon={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        )}
      </Col>
    </Row>
  );
}
