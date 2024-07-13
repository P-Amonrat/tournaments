import { useContext, useEffect, useState } from "react";
import { useMatches, useNavigate } from "@remix-run/react";
import { Card, Col, Flex, Row, Typography } from "antd";
import { AppContext, AuthContext } from "~/contexts";
import { AlbumEntryControl } from "./AlbumEntryControl";
import { LockOutlined } from "@ant-design/icons";
import { OverlayBg } from "~/components/common";
const { Title } = Typography;

interface AlbumEntryProps {
  data: any;
  uuid: string;
  fetcher?: any;
  isMyWebboard?: boolean;
}

export function AlbumEntry(props: AlbumEntryProps) {
  const { data, uuid, fetcher } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { scheme } = useContext(AppContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const isOwner = user && data && data.userId && data.userId === user.id;
  const isForumAdmin = user && user.roles.includes("forum_admin");
  const [screenSize, setScreenSize] = useState<string>(""); // Initialize state variable to hold screen size

  // Add placeholders if there are fewer than 4 photos
  while (data.photos.length < 4) {
    data.photos.push({ placeHolder: "/image/default-image.png" }); // Placeholder image
  }

  useEffect(() => {
    // Listen for changes in screen size and update state variable accordingly
    const handleResize = () => {
      if (window.innerWidth > 576) {
        setScreenSize("greaterThanSM");
      } else {
        setScreenSize("atSM");
      }
    };

    handleResize(); // Call once to set initial state

    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      // Cleanup: Remove event listener when component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const coverStyle = {
    height: 400,
    borderRadius: 5,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage:
      data && data.cover && data.cover !== "-"
        ? `url("${cdnUrl}/${data.cover}")`
        : undefined,
    cursor: "pointer",
  } as any;

  const photosStyle = {
    height: 200,
    borderRadius: 5,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage:
      data && data.cover && data.cover !== "-"
        ? `url("/image/default-image.png")`
        : undefined,
    cursor: "pointer",
  } as any;

  const cardStyle = {
    borderRadius: 10,
    boxShadow:
      scheme === "dark" ? "none" : "0px 4px 15px -5px rgba(0,0,0,0.75)",
    border: "none",
  };

  const linkToSingle = (event: any) => {
    event.stopPropagation();
    navigate(`/users/${uuid}/my-album/${data.id}`);
  };

  return (
    <>
      <Card style={cardStyle}>
        <Flex gap={20} vertical>
          <Flex justify="space-between" align="flex-start" wrap="wrap">
            {/* <WebboardEntryAuthor
            anonymous={data.anonymous}
            isAdmin={data.author?.roles.includes("forum_admin")}
            createdAt={data.createdAt}
            updatedAt={data.updatedAt}
            displayName={data.author?.displayName}
            displayImage={`${cdnUrl}/${data.author?.displayImage}`}
            assetFrame={`${cdnUrl}/${data.author?.assetFrame}`}
            userUuid={data.author?.uuid}
            isVerified={data.author?.isDopaVerified}
            role={data.author?.roles}
          /> */}
            <Title level={5}>
              {data.isPrivate ? (
                <LockOutlined
                  style={{ color: "#7C6FF6", marginRight: "5px" }}
                />
              ) : (
                ""
              )}
              {data.name}
            </Title>
            <AlbumEntryControl
              fetcher={fetcher}
              id={data.id}
              userUuid={uuid}
              isOwner={isOwner}
              isForumAdmin={isForumAdmin}
              initialValues={data}
              postType="album"
            />
          </Flex>
          <Row
            gutter={[10, 10]}
            wrap
            style={{ cursor: "pointer" }}
            onClick={linkToSingle}
          >
            <Col span={screenSize === "greaterThanSM" ? 12 : 24}>
              {/* <Image
              src={`${cdnUrl}/${data.cover}`}
              wrapperStyle={{
                borderRadius: 8,
                overflow: "hidden",
                width: "100%",
                height: 200,
              }}
              preview={false}
            /> */}
              <Card bordered={false} style={coverStyle} />
            </Col>
            <Col span={screenSize === "greaterThanSM" ? 12 : 24}>
              <Row gutter={[10, 5]}>
                {/* <Col span={12}> */}
                {/* <Image
                  src="/image/banner.jpg"
                  wrapperStyle={{
                    borderRadius: 8,
                    overflow: "hidden",
                    width: "100%",
                    height: 200,
                  }}
                  preview={false}
                /> */}
                {/* <Card bordered={false} style={photosStyle} />
                </Col> */}
                {/* {data.photos.slice(0, 4).map((photo: any, index: number) => (
                  <Col key={index} span={12}>
                    <Card
                      bordered={false}
                      style={{
                        ...photosStyle,
                        backgroundImage:
                          photo && photo.path && photo.path !== "-"
                            ? `url("${cdnUrl}/${photo.path}")`
                            : `url("/image/default-image.png")`,
                      }}
                    />
                  </Col>
                ))} */}
                {data.photos.slice(0, 4).map((photo: any, index: number) => {
                  const isLastPhoto =
                    index === data.photos.slice(0, 4).length - 1;

                  return (
                    <Col key={index} span={12}>
                      {isLastPhoto ? (
                        <Card
                          bordered={false}
                          style={{
                            ...photosStyle,
                            backgroundImage:
                              photo.path && photo.path !== "-"
                                ? `url("${cdnUrl}/${photo.path}")`
                                : `url("/image/banner.jpg")`,
                          }}
                        >
                          {data.totalPhotos - 4 > 0 && (
                            <>
                              <Typography.Text
                                style={{
                                  textAlign: "center",
                                  margin: 0,
                                  position: "absolute",
                                  top: "50%",
                                  left: "50%",
                                  msTransform: "translate(-50%,-50%)",
                                  transform: "translate(-50%, -50%)",
                                  fontWeight: 600,
                                  fontSize: 36,
                                  zIndex: 1,
                                }}
                              >
                                {data.totalPhotos - 4} +
                              </Typography.Text>
                              <OverlayBg opacity={0.7} />
                            </>
                          )}
                        </Card>
                      ) : (
                        <Card
                          bordered={false}
                          style={{
                            ...photosStyle,
                            backgroundImage:
                              photo.path && photo.path !== "-"
                                ? `url("${cdnUrl}/${photo.path}")`
                                : `url("/image/banner.jpg")`,
                          }}
                        />
                      )}
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Flex>
      </Card>
    </>
  );
}
