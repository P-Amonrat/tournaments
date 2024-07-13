import { useMatches } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import {
  Avatar,
  Button,
  Card,
  Skeleton,
  Space,
  notification,
  theme,
} from "antd";
import { CameraOutlined, LikeOutlined } from "@ant-design/icons";
import {
  ImageSelector,
  Media,
  OverlayBg,
  TiltButton,
} from "~/components/common";
import { AppContext } from "~/contexts";
import { useContext } from "react";
import { RiShareForwardLine } from "react-icons/ri";
import { Image, ThumbsUp } from "lucide-react";
import { ShareDropDown } from "~/components/common/ShareDropDown";
// import { AppContext } from "~/contexts";
// import { useContext } from "react";

const { useToken } = theme;

interface UserHeroProps {
  data: any;
  fetcher: any;
  isOwner?: boolean;
  loading?: boolean;
  frameAsset?: any;
  onLikeAmountClicked?: () => void;
  amountLikeByUser: number;
}

export function UserHero(props: UserHeroProps) {
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { t } = useTranslation();
  const {
    data,
    fetcher,
    isOwner,
    loading,
    frameAsset,
    onLikeAmountClicked,
    amountLikeByUser,
  } = props;
  // const { scheme } = useContext(AppContext);
  const { token } = useToken();
  const displayImageField = "displayImage";
  const coverImageField = "coverImage";
  const { baseUrl } = useContext(AppContext);
  const profileUrl = `${baseUrl}/users/${
    data?.userName ? data.userName : data.uuid
  }`;
  const [messageApi, contextHolder] = notification.useNotification();
  let displayFrameImages: any = [];
  const cardStyle = {
    position: "relative",
    display: "flex",
    height: "25vw",
    minHeight: 150,
    maxHeight: 400,
    flexDirection: "column",
    borderRadius: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage:
      data && data.coverImage
        ? `url("${cdnUrl}/${data.coverImage}")`
        : "url('/image/placeholder.png')",
  } as any;
  const bodyStyle = {
    height: "100%",
    padding: 0,
  } as any;
  const avatarStyle = {
    position: "absolute",
    // left: "3.5%",
    padding: 0,
    border: data.assetFrame ? "none" : `6px solid ${token.colorBgLayout}`,
    borderRadius: "50%",
    bottom: -50,
    zIndex: 1,
  } as any;
  const coverImageChangeButtonStyle = {
    position: "relative",
    border: "none",
    backgroundColor: "rgba(0, 0, 0, 0.80)",
    color: "#fff",
    borderRadius: 6,
  } as any;

  const displayPresetImages = Array(8)
    .fill("")
    .map(
      (arg: string, index: number) =>
        `${cdnUrl}/profile-avatars/profile-${index + 1}.jpg`
    );

  if (frameAsset) {
    displayFrameImages = frameAsset.map((item: any) => ({
      id: `${item.id}`,
      url: `${cdnUrl}/${item.url}`,
    }));
  }

  const coverPresetImages = Array(16)
    .fill("")
    .map((arg: string, index: number) =>
      index < 8
        ? `${cdnUrl}/profile-covers/cover-${index + 1}.jpg`
        : `${cdnUrl}/profile-covers/cover2-${index - 7}.jpg`
    );

  return (
    <Card bordered={false} style={cardStyle} bodyStyle={bodyStyle}>
      {loading ? (
        <Skeleton active style={{ position: "relative" }} />
      ) : (
        <>
          <OverlayBg />
          <div
            style={{
              display: "flex",
              flex: "auto",
              alignItems: "end",
              position: "relative",
              justifyContent: "flex-end",
              width: "100%",
              height: "100%",
              maxWidth: 1440,
              marginInline: "auto",
              paddingInline: "3.5%",
              paddingBlock: 20,
            }}
          >
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <div style={avatarStyle}>
                <div
                  className="hover-show-parent"
                  style={{ position: "relative" }}
                >
                  <Avatar
                    src={
                      data && data.displayImage && cdnUrl
                        ? `${cdnUrl}/${data.displayImage}`
                        : "/image/user-placeholder.png"
                    }
                    style={{ zIndex: -1, border: "none" }}
                    size={120}
                  />
                  {data.assetFrame && (
                    <Avatar
                      src={`${cdnUrl}/${data.assetFrame}`}
                      style={{
                        position: "absolute",
                        left: -30,
                        top: -30,
                        overflow: "visible",
                      }}
                      size={180}
                    />
                  )}
                  {isOwner && (
                    <ImageSelector
                      callback={{
                        method: "patch",
                        key: displayImageField,
                        path: "/resources/upload/user-display-image",
                      }}
                      title={t("select avatar image")}
                      fetcher={fetcher}
                      fieldName={displayImageField}
                      presetImages={displayPresetImages}
                      frameImages={displayFrameImages}
                      presetRound
                    >
                      <OverlayBg
                        className="hover-show-child"
                        style={{ cursor: "pointer", borderRadius: "50%" }}
                      >
                        <CameraOutlined
                          style={{ fontSize: 30, color: "#fff" }}
                        />
                      </OverlayBg>
                    </ImageSelector>
                  )}
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  left: data.assetFrame ? 150 : 150,
                  bottom: 0,
                  padding: "5px 10px",
                  // backgroundColor:
                  //   scheme === "dark" ? "#221f20" : token.colorBgLayout,
                  // color: token.colorTextBase,
                  backgroundColor: "#000000",
                  color: "#fff",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
                onClick={onLikeAmountClicked}
              >
                <Space>
                  <ThumbsUp />
                  {amountLikeByUser}
                </Space>
              </div>
            </div>
            <Media at="sm">
              <div style={{ position: "absolute", top: 15, right: 17 }}>
                {isOwner && (
                  <ImageSelector
                    callback={{
                      method: "patch",
                      key: coverImageField,
                      path: "/resources/upload/user-cover-image",
                    }}
                    title={t("select cover image")}
                    fetcher={fetcher}
                    fieldName={coverImageField}
                    presetImages={coverPresetImages}
                  >
                    <Button
                      icon={<Image />}
                      style={coverImageChangeButtonStyle}
                    >
                      {t("change cover")}
                    </Button>
                  </ImageSelector>
                )}
              </div>
            </Media>
            <Media greaterThan="sm">
              {isOwner && (
                <ImageSelector
                  callback={{
                    method: "patch",
                    key: coverImageField,
                    path: "/resources/upload/user-cover-image",
                  }}
                  title={t("select cover image")}
                  fetcher={fetcher}
                  fieldName={coverImageField}
                  presetImages={coverPresetImages}
                >
                  <Button icon={<Image />} style={coverImageChangeButtonStyle}>
                    {t("change cover")}
                  </Button>
                </ImageSelector>
              )}
            </Media>
            <Media at="sm">
              {isOwner && (
                <ShareDropDown
                  copiedMessage={t("profile url copied")}
                  postUrl={profileUrl}
                  shareProfile={true}
                />
              )}
            </Media>
          </div>
          {contextHolder}
        </>
      )}
    </Card>
  );
}
