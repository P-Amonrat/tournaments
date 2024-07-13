import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Link, useFetcher, useMatches, useNavigate } from "@remix-run/react";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Drawer,
  Empty,
  Image,
  Input,
  Layout,
  List,
  Row,
  Skeleton,
  Space,
  Typography,
  theme,
} from "antd";
import {
  MenuFoldOutlined,
  SearchOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Media, Menus, TiltButton, TiltMenus } from "../common";
import { useTranslation } from "react-i18next";
import { AppContext, AuthContext } from "~/contexts";
import { NavbarDropdown, NavbarMobileContent } from "./";
import { NotifcationIcon } from "../common/NotificationIcon";
import { debounce, isEmpty, isNil, omitBy } from "lodash";
import { Search } from "lucide-react";
const { useToken } = theme;
const { Header } = Layout;

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const fetcher = useFetcher();
  const matches = useMatches();
  const { scheme } = useContext(AppContext);
  const { token } = useToken();
  const navigate = useNavigate();
  const { cdnUrl, notificationInterval } = matches[0].data;
  const { user, openLoginModal } = useContext(AuthContext);
  const [mobileCollapsed, setMobileCollapsed] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<any>();
  const [searchResultsList, setSearchResultsList] = useState<any[]>([]);
  const [searchParams, setSearchParams] = useState<any>({});
  const [notiCount, setNotiCount] = useState(0);
  const [hasInterval, setHasInterval] = useState<any>(null);
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [mouseOverList, setMouseOverList] = useState(false);
  const [canOpenSearch, setCanOpenSearch] = useState<boolean>(true);
  // const [loading, setLoading] = useState(false);
  const { centerMenus, dropdownMenus, mobileMenus } = Menus();
  const [screenSize, setScreenSize] = useState<string>(""); // Initialize state variable to hold screen size

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

  const tiltButtonStyle = {
    paddingInline: 15,
    height: 39.6,
    lineHeight: "39.6px",
    paddingBlock: 0,
    marginTop: "2px",
  };

  const searchCardStyle = {
    height: 54,
    width: screenSize === "greaterThanSM" ? "40%" : "70%",
    marginTop: screenSize === "greaterThanSM" ? 10 : 120,
    borderRadius: 5,
    boxShadow: "none",
    overflow: "visible",
    zIndex: 1,
    color: "#white",
  };
  const searchCardBodyStyle = {
    padding: 5,
    backgroundColor: scheme === "dark" ? "#121212" : "#FFFFFF",
    borderRadius: 10,
    // boxShadow:
    //   scheme === "dark"
    //     ? "0px 4px 15px -5px rgba(255,255,255,0.75)"
    //     : "0px 4px 15px -5px rgba(0,0,0,0.75)",

    overflow: "hidden",
  };

  const handleOpenSearch = () => {
    if (canOpenSearch) {
      setOpenSearch(true);
    }
  };

  const handleCloseSearch = () => {
    console.log("close search");
    if (!mouseOverList) {
      // Handle closing the search only if mouse is not over the list
      setOpenSearch(false);
    }
    setCanOpenSearch(false);
    // After 0.5 seconds, set the flag back to true to allow reopening
    setTimeout(() => {
      setCanOpenSearch(true);
    }, 500);
    // If mouse is over the list, do nothing
  };
  const handleSearch = useCallback((e: any) => {
    e.preventDefault(); // Prevent default form submission behavior
    const searchString = e.target.value;
    let newSearchParams = { ...searchParams };
    if (searchString.length > 0) {
      newSearchParams.userName = searchString;
    } else {
      delete newSearchParams["userName"];
    }
    // submit(
    //   omitBy(newSearchParams, (v) => isNil(v) && isEmpty(v)),
    //   { method: "get", preventScrollReset: true }
    // );
    fetcher.submit(
      // Data to submit
      omitBy(newSearchParams, (v) => isNil(v) && isEmpty(v)),
      // Options object
      {
        method: "get",
        preventScrollReset: true,
        action: "/resources/searchUser",
      }
    );
  }, []);

  /*   const handleLoadMore = useCallback(() => {
    const newSearchParams = {
      ...searchParams,
      offset: searchResultsList.length,
    };
    const queryString = new URLSearchParams(
      omitBy(newSearchParams, isNil)
    ).toString();

    fetcher.load(`.?${queryString}`);
  }, [searchResultsList, searchParams]); */

  const handleLoadMore = () => {
    console.log("loadmore");
  };

  const handleDebounceSearch = useMemo(
    () => debounce(handleSearch, 500),
    [handleSearch]
  );

  const handleCloseSearchForce = () => {
    setOpenSearch(false);
  };

  const handleOpenCollapsed = () => {
    setMobileCollapsed(true);
  };

  const handleCloseCollapsed = () => {
    setMobileCollapsed(false);
  };

  const getUnreadNoti = () => {
    if (navigator.onLine) {
      fetcher.load(`/resources/get-unread-notification`);
    }
  };

  const loadMoreData = () => {
    console.log("loadmore data");

    // const newSearchParams = {
    //   ...searchParams,
    //   offset: searchResultsList.length,
    // };

    // // submit(
    // //   omitBy(newSearchParams, (v) => isNil(v) && isEmpty(v)),
    // //   { method: "get", preventScrollReset: true }
    // // );
    // fetcher.submit(
    //   // Data to submit
    //   omitBy(newSearchParams, (v) => isNil(v) && isEmpty(v)),
    //   // Options object
    //   {
    //     method: "get",
    //     preventScrollReset: true,
    //     action: "/resources/searchUser",
    //   }
    // );
  };

  useEffect(() => {
    if (user) {
      if (!hasInterval) {
        getUnreadNoti();
        const intervalId = setInterval(() => {
          if (document.visibilityState === "visible") {
            getUnreadNoti();
          }
        }, notificationInterval * 1000);
        setHasInterval(intervalId);
        const resetInterval = setTimeout(() => {
          clearInterval(intervalId);
          clearTimeout(resetInterval);
        }, 6 * 3600 * 1000); // to reset interval once time passed by 6 hours
      }
    } else if (hasInterval) {
      clearInterval(hasInterval);
      setHasInterval(null);
    }
  }, [user]);

  useEffect(() => {
    if (
      fetcher.data &&
      fetcher.data.searchUserResult &&
      fetcher.data.searchParams &&
      fetcher.data.loadMore === false
    ) {
      setSearchParams(fetcher.data.searchParams);
      console.log(
        "...fetcher.data.searchUserResult?.items",
        ...fetcher.data.searchUserResult?.items
      );
      setSearchResults(fetcher.data.searchUserResult);

      setSearchResultsList(
        fetcher.data.searchUserResult?.items &&
          fetcher.data.searchUserResult?.items.length
          ? [...fetcher.data.searchUserResult?.items]
          : []
      );
    } else if (
      fetcher.data &&
      fetcher.data.searchUserResult &&
      fetcher.data.loadMore
    ) {
      setSearchResults(fetcher.data.searchUserResult);
      setSearchResultsList([
        ...searchResultsList,
        ...fetcher.data.searchUserResult.items,
      ]);
    }
  }, [fetcher]);

  useEffect(() => {
    if (
      fetcher &&
      fetcher.data &&
      fetcher.state === "idle" &&
      fetcher.data.unreadCount
    ) {
      setNotiCount(fetcher.data.unreadCount);
    }
  }, [fetcher]);

  return (
    <Header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        paddingInline: 0,
        zIndex: 999,
      }}
    >
      <Row
        align="middle"
        style={{
          position: "relative",
          paddingInline: "3.5%",
          maxWidth: 1440,
          marginInline: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {openSearch ? (
            <Card
              bordered={false}
              bodyStyle={searchCardBodyStyle}
              style={searchCardStyle}
              onMouseEnter={() => setMouseOverList(true)} // Set mouseOverList to true when mouse enters list
              onMouseLeave={() => setMouseOverList(false)} // Set mouseOverList to false when mouse leaves list
            >
              <div
                className={
                  scheme === "dark"
                    ? "search-input-user-dark"
                    : "search-input-user-light"
                }
              >
                <Input
                  autoFocus
                  bordered={false}
                  onBlur={handleCloseSearch}
                  prefix={
                    <Search
                      // className="site-form-item-icon"
                      style={{
                        fontSize: 20,
                        paddingRight: 10,
                        width: "100%",
                        color: scheme === "dark" ? "#fff" : "#000",
                      }}
                    />
                  }
                  defaultValue={
                    searchParams && searchParams.name ? searchParams.name : ""
                  }
                  onChange={handleDebounceSearch}
                />
              </div>

              <div
                id="scrollableDiv"
                style={{ maxHeight: "400px", overflowY: "auto" }}
              >
                {searchParams.name && (
                  <InfiniteScroll
                    dataLength={searchResultsList.length}
                    next={loadMoreData}
                    hasMore={searchResultsList.length < searchResults?.total}
                    loader={
                      <Skeleton
                        avatar
                        paragraph={{
                          rows: 1,
                        }}
                        active
                      />
                    }
                    // endMessage={
                    //   searchResultsList.length > 0 ? (
                    //     <Divider plain>
                    //       {t("It is all, nothing more")} 🤐
                    //     </Divider>
                    //   ) : null
                    // }
                    scrollableTarget="scrollableDiv"
                  >
                    {searchResultsList.length ? (
                      <List
                        style={{ marginTop: 10 }} // Adjust margin top as needed
                        bordered={false}
                        dataSource={searchResultsList}
                        renderItem={(item: any) => (
                          <List.Item>
                            <Space onMouseDown={(e) => e.stopPropagation()}>
                              <div
                                style={{
                                  position: "relative", // Set position to relative for the parent div
                                  padding: "23.5px",
                                  backgroundImage: `url(${cdnUrl}/${item.assetFrame})`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                  width: "fit-content", // Adjust the width to fit content
                                  height: "fit-content", // Adjust the height to fit content
                                  display: "inline-block", // Make the div behave as an inline-block
                                  zIndex: 1,
                                }}
                              >
                                {/* Position the Avatar inside the parent div */}
                                <div
                                  style={{
                                    position: "absolute",
                                    top: "18.5%",
                                    left: "18.5%",
                                  }}
                                >
                                  <Avatar
                                    src={
                                      // item && item.displayImage && cdnUrl
                                      //   ? `${cdnUrl}/${item.displayImage}`
                                      //   : "/image/user-placeholder.png"
                                      `${cdnUrl}/${item.displayImage}`
                                    }
                                    size={30}
                                  />
                                </div>
                              </div>
                              <Typography.Title
                                level={5}
                                style={{
                                  fontSize: "15px",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  setMouseOverList(false);
                                  handleCloseSearchForce();
                                  navigate(
                                    `/users/${
                                      item?.userName ? item.userName : item.uuid
                                    }`
                                  );
                                }}
                              >
                                {item.displayName}
                              </Typography.Title>
                            </Space>
                          </List.Item>
                        )}
                      />
                    ) : (
                      <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description={t("no user")}
                      />
                    )}
                  </InfiniteScroll>
                )}
                {/* {searchResultsList &&
                    searchResultsList.length < searchResults?.total && (
                      <div style={{ textAlign: "center", margin: "20px 0" }}>
                        <Button onClick={handleLoadMore}>Load More</Button>
                      </div>
                    )} */}
              </div>
            </Card>
          ) : null}
          <Media greaterThan="sm">
            {openSearch ? null : (
              <TiltMenus
                position="center"
                menus={centerMenus}
                style={{ position: "relative", zIndex: 1 }}
              />
            )}
          </Media>
        </div>
        <Col flex="none" md={5}>
          <Link to="/">
            <Image
              src="/image/logo.png"
              preview={false}
              style={{ height: "42px", width: "auto" }}
            />
          </Link>
        </Col>
        <Col flex="auto">
          <Space
            direction="horizontal"
            style={{ display: "flex", justifyContent: "end" }}
            size={0}
          >
            <Avatar
              size={40}
              onClick={openSearch ? handleCloseSearch : handleOpenSearch}
              style={{
                backgroundColor:
                  scheme === "dark" ? "#221f20" : token.colorBgLayout,
                color: token.colorTextBase,
                marginBottom: "5px",
                cursor: "pointer",
                marginRight: "5px",
              }}
            >
              {openSearch ? <CloseOutlined /> : <Search />}
            </Avatar>

            {user && <NotifcationIcon count={notiCount} user={user} />}
            <Media greaterThan="sm">
              {user ? (
                <NavbarDropdown menus={dropdownMenus} />
              ) : (
                <Space
                  size={5}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <NavbarDropdown menus={dropdownMenus} />
                  <TiltButton
                    color="primary"
                    style={tiltButtonStyle}
                    onClick={() => openLoginModal()}
                  >
                    {t("connect account")}
                  </TiltButton>
                </Space>
              )}
            </Media>
            <Media at="sm">
              <Space
                size={15}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {user ? (
                  // <div
                  //   style={{
                  //     padding: "6px",
                  //     backgroundImage: `url(${cdnUrl}/${user.assetFrame})`,
                  //     backgroundSize: "cover",
                  //     backgroundPosition: "center",
                  //   }}
                  // >
                  <Avatar
                    size={40}
                    onClick={handleOpenCollapsed}
                    style={{ cursor: "pointer" }}
                    src={
                      user.displayImage
                        ? `${cdnUrl}/${user.displayImage}`
                        : "/image/placeholder.png"
                    }
                  />
                ) : (
                  // </div>
                  <>
                    <TiltButton
                      color="primary"
                      style={tiltButtonStyle}
                      onClick={() => openLoginModal()}
                    >
                      {t("connect account")}
                    </TiltButton>
                    <MenuFoldOutlined
                      onClick={handleOpenCollapsed}
                      style={{ display: "flex", fontSize: 20 }}
                    />
                  </>
                )}
                <Drawer
                  placement="right"
                  closable={false}
                  onClose={handleCloseCollapsed}
                  open={mobileCollapsed}
                  width={300}
                  styles={{ body: { padding: 0 } }}
                >
                  <NavbarMobileContent
                    menus={[...mobileMenus, ...dropdownMenus]}
                    onMenuClicked={handleCloseCollapsed}
                  />
                </Drawer>
              </Space>
            </Media>
          </Space>
        </Col>
      </Row>
    </Header>
  );
};
