/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useContext } from "react";
import { useMatches, useNavigate } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import {
  Avatar,
  Col,
  Image,
  notification,
  Row,
  Skeleton,
  Space,
  theme,
  Tooltip,
  Typography,
} from "antd";
import { UserSocial } from "./";
import { Media, TiltButton, ToCopyField } from "~/components/common";
import { AppContext, AuthContext } from "~/contexts";
import { ShareDropDown } from "~/components/common/ShareDropDown";
import { Link, Mail, PenLine, Phone, ThumbsUp, UserCheck } from "lucide-react";
const { Text, Title } = Typography;
const { useToken } = theme;

interface UserTitleProps {
  data: any;
  isOwner?: boolean;
  loading?: boolean;
  onKycClicked?: () => void;
  onSubmitLike?: () => void;
  likeStatus?: boolean;
}

export const UserTitle: React.FC<UserTitleProps> = (props: UserTitleProps) => {
  const { data, isOwner, loading, onKycClicked, onSubmitLike, likeStatus } =
    props;
  const { token } = useToken();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { baseUrl, scheme } = useContext(AppContext);
  const { user, openLoginModal } = useContext(AuthContext);
  const profileUrl = `${baseUrl}/users/${
    data.userName ? data.userName : data.uuid
  }`;
  const [messageApi, contextHolder] = notification.useNotification();

  const navigateToSetting = () => {
    navigate("/settings");
  };

  const roles = data.roles.sort((a: any, b: any) => a.id - b.id);

  return loading ? (
    <Skeleton active />
  ) : (
    <Space direction="vertical" size={8} style={{ display: "flex" }}>
      <Row gutter={[20, 20]} style={{ alignItems: "center" }}>
        <Col flex="auto">
          <Space size={5} style={{ display: "flex", flexWrap: "wrap" }}>
            <Media greaterThan="sm">
              <Space size={5}>
                <Title level={3} style={{ margin: 0, fontSize: 36 }}>
                  {data.displayName}
                </Title>
                {roles[0] && (
                  <Space style={{ marginRight: "5px" }}>
                    <Image
                      width={30}
                      src={`${cdnUrl}/${roles[0].badgeImage}`}
                      preview={false}
                    />
                    <Text>{t(roles[0].name)}</Text>
                  </Space>
                )}
              </Space>
            </Media>
            <Media at="sm">
              <Space size={5}>
                <Title level={3} style={{ margin: 0 }}>
                  {data.displayName}
                </Title>
                {roles[0] && (
                  <Tooltip
                    title={
                      roles[0] && (
                        <Space style={{ marginRight: "5px" }}>
                          <Text style={{ color: "white" }}>
                            {t(roles[0].name)}
                          </Text>
                        </Space>
                      )
                    }
                    placement="top"
                    arrow={false}
                  >
                    <Image
                      width={30}
                      src={`${cdnUrl}/${roles[0].badgeImage}`}
                      preview={false}
                    />
                  </Tooltip>
                )}
              </Space>
            </Media>

            <Space size={10} style={{ display: "flex", flexWrap: "wrap" }}>
              <Media greaterThan="sm">
                {
                  <ShareDropDown
                    copiedMessage={t("profile url copied")}
                    postUrl={profileUrl}
                    shareProfile={true}
                  />
                }
              </Media>

              <Media greaterThan="sm">
                <Space>
                  {isOwner &&
                    (!data.profile ||
                      (data.profile && !data.isDopaVerified)) && (
                      <TiltButton
                        color="primary"
                        style={{ paddingInline: 15 }}
                        onClick={onKycClicked}
                      >
                        <Space size={5} style={{ strokeWidth: 2 }}>
                          <UserCheck />
                          <Text style={{ color: "inherit" }}>
                            {t("verify account")}
                          </Text>
                        </Space>
                      </TiltButton>
                    )}
                  {data.isDopaVerified && !roles[0] && (
                    <Space>
                      <Image
                        width={30}
                        src="/image/verifiedUser.png"
                        preview={false}
                      />
                      <Text>{t("verified")}</Text>
                    </Space>
                  )}
                  {!isOwner && (
                    <TiltButton
                      color={likeStatus ? "secondary" : "primary"}
                      style={{ paddingInline: 15 }}
                      onClick={user ? onSubmitLike : openLoginModal}
                    >
                      <Space
                        size={5}
                        style={{
                          strokeWidth: 2,
                          color: likeStatus ? "#7C6FF6" : "inherit",
                        }}
                      >
                        <ThumbsUp />
                        <Text>{likeStatus ? t("liked") : t("like")}</Text>
                      </Space>
                    </TiltButton>
                  )}
                  {isOwner && (
                    <TiltButton
                      color={"secondary"}
                      style={{ paddingInline: 15 }}
                      onClick={navigateToSetting}
                    >
                      <Space
                        size={5}
                        style={{
                          strokeWidth: 2,
                          color: likeStatus ? "#7C6FF6" : "inherit",
                        }}
                      >
                        <PenLine style={{ color: "#7a6fee" }} />
                        <Text>{t("edit profile")}</Text>
                      </Space>
                    </TiltButton>
                  )}
                </Space>
              </Media>

              <Media at="sm">
                <Row gutter={[10, 10]}>
                  <Col span={24} style={{ minWidth: "320px" }}>
                    {isOwner &&
                      (!data.profile ||
                        (data.profile && !data.isDopaVerified)) && (
                        <TiltButton
                          color="primary"
                          style={{ paddingInline: 15 }}
                          onClick={onKycClicked}
                        >
                          <Space size={5} style={{ strokeWidth: 2 }}>
                            <UserCheck />
                            <Text style={{ color: "inherit" }}>
                              {t("verify account")}
                            </Text>
                          </Space>
                        </TiltButton>
                      )}
                    {data.isDopaVerified && !roles[0] && (
                      <Space>
                        <Image
                          width={30}
                          src="/image/verifiedUser.png"
                          preview={false}
                        />
                        <Text>{t("verified")}</Text>
                      </Space>
                    )}
                  </Col>
                  <Col span={24} style={{ minWidth: "320px" }}>
                    {!isOwner && (
                      <TiltButton
                        color={likeStatus ? "secondary" : "primary"}
                        style={{ paddingInline: 15 }}
                        onClick={user ? onSubmitLike : openLoginModal}
                      >
                        <Space
                          size={5}
                          style={{
                            strokeWidth: 2,
                            color: likeStatus ? "#7C6FF6" : "inherit",
                          }}
                        >
                          <ThumbsUp />
                          <Text>{likeStatus ? t("liked") : t("like")}</Text>
                        </Space>
                      </TiltButton>
                    )}
                    {isOwner && (
                      <TiltButton
                        color={"secondary"}
                        style={{ paddingInline: 15 }}
                        onClick={navigateToSetting}
                      >
                        <Space
                          size={5}
                          style={{
                            strokeWidth: 2,
                            color: likeStatus ? "#7C6FF6" : "inherit",
                          }}
                        >
                          <PenLine style={{ color: "#7a6fee" }} />
                          <Text>{t("edit profile")}</Text>
                        </Space>
                      </TiltButton>
                    )}
                  </Col>
                </Row>
              </Media>
            </Space>
          </Space>
        </Col>
        <Media greaterThan="sm">
          <UserSocial data={data} isOwner={isOwner} />
        </Media>
      </Row>
      <Media greaterThan="sm">
        <Row gutter={10}>
          <Col>
            {(data.profile.privateDiscordId !== "private" || isOwner) &&
              data.profile.discordId && (
                <Space size={10}>
                  <Avatar src="/image/social/discord.png" size={30} />
                  <Text style={{ fontSize: "0.9em" }}>{t("Discord ID")}</Text>
                  <ToCopyField
                    alertMessage={t("discord ID copied")}
                    copyMessage={data.profile.discordId}
                    text={data.profile.discordId}
                    style={{ paddingBlock: 3 }}
                    fontSize="0.9em"
                  />
                </Space>
              )}
          </Col>
          <Col>
            {(data.profile.privateEmail !== "private" || isOwner) &&
              data.profile.profileEmail && (
                <Space size={5} style={{ marginTop: "5px" }}>
                  <Mail style={{ color: "#7063f4" }} />
                  <Text style={{ fontSize: "0.9em" }}>
                    {data.profile.profileEmail}
                  </Text>
                </Space>
              )}
          </Col>
          <Col>
            {(data.profile.privatePhone !== "private" || isOwner) &&
              data.profile.profilePhoneNumber && (
                <Space size={5} style={{ marginTop: "5px" }}>
                  <Phone style={{ color: "#7063f4" }} />
                  <Text style={{ fontSize: "0.9em" }}>
                    {data.profile.profilePhoneNumber}
                  </Text>
                </Space>
              )}
          </Col>
        </Row>
      </Media>
      <Media at="sm" style={{ marginLeft: "9px" }}>
        <Row gutter={10} style={{ marginBottom: "10px" }}>
          <Col span={24} style={{ marginLeft: "-5px" }}>
            {(data.profile.privateDiscordId !== "private" || isOwner) &&
              data.profile.discordId && (
                <Space size={10}>
                  <Avatar src="/image/social/discord.png" size={30} />
                  <Text style={{ fontSize: "0.9em" }}>{t("Discord ID")}</Text>
                  <ToCopyField
                    alertMessage={t("discord ID copied")}
                    copyMessage={data.profile.discordId}
                    text={data.profile.discordId}
                    style={{ paddingBlock: 3 }}
                    fontSize="0.9em"
                  />
                </Space>
              )}
          </Col>
          <Col span={24}>
            {(data.profile.privateEmail !== "private" || isOwner) &&
              data.profile.profileEmail && (
                <Space size={5} style={{ marginTop: "5px" }}>
                  <Mail style={{ color: "#7063f4" }} />
                  <Text style={{ fontSize: "0.9em" }}>
                    {data.profile.profileEmail}
                  </Text>
                </Space>
              )}
          </Col>
          <Col span={24}>
            {(data.profile.privatePhone !== "private" || isOwner) &&
              data.profile.profilePhoneNumber && (
                <Space size={5} style={{ marginTop: "5px" }}>
                  <Phone style={{ color: "#7063f4" }} />
                  <Text style={{ fontSize: "0.9em" }}>
                    {data.profile.profilePhoneNumber}
                  </Text>
                </Space>
              )}
          </Col>
        </Row>
        {(data.profile.bio || data.profile.websiteUrl) && (
          <Space direction="vertical" size={5}>
            <div
              className="ctrlg-html"
              style={{
                fontSize: "0.9em",
                color: scheme === "dark" ? "#fff" : "#000",
              }}
              dangerouslySetInnerHTML={{
                __html: `${data.profile.bio}`,
              }}
            />
            {((data.profile.websiteUrl &&
              data.profile.privateWebsite !== "private") ||
              (data.profile.websiteUrl && isOwner)) && (
              <Space size={5}>
                <Link style={{ color: "#786fe6" }} />
                <a
                  href={
                    data.profile.websiteUrl.indexOf("https://") > -1 ||
                    data.profile.websiteUrl.indexOf("http://") > -1
                      ? data.profile.websiteUrl
                      : `https://${data.profile.websiteUrl}`
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text style={{ fontSize: "0.9em" }}>
                    {data.profile.websiteUrl}
                  </Text>
                </a>
              </Space>
            )}
          </Space>
        )}
        <div style={{ marginTop: "15px", marginLeft: "-2px" }}>
          <UserSocial data={data} isOwner={isOwner} />
        </div>
      </Media>
      {(data.profile.bio || data.profile.websiteUrl) && (
        <Media greaterThan="sm">
          <Space direction="vertical" size={5}>
            <div
              className="ctrlg-html"
              style={{
                fontSize: "0.9em",
                color: scheme === "dark" ? "#fff" : "#000",
              }}
              dangerouslySetInnerHTML={{
                __html: `${data.profile.bio}`,
              }}
            />
            {((data.profile.websiteUrl &&
              data.profile.privateWebsite !== "private") ||
              (data.profile.websiteUrl && isOwner)) && (
              <Space size={5}>
                <Link style={{ color: "#786fe6" }} />
                <a
                  href={
                    data.profile.websiteUrl.indexOf("https://") > -1 ||
                    data.profile.websiteUrl.indexOf("http://") > -1
                      ? data.profile.websiteUrl
                      : `https://${data.profile.websiteUrl}`
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text style={{ fontSize: "0.9em" }}>
                    {data.profile.websiteUrl}
                  </Text>
                </a>
              </Space>
            )}
          </Space>
        </Media>
      )}

      {contextHolder}
    </Space>
  );
};
