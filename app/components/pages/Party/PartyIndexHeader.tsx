import { useCallback, useContext, useMemo, useState } from "react";
import {
  Card,
  Col,
  Input,
  Row,
  Space,
  Statistic,
  theme,
  Tooltip,
  Typography,
} from "antd";
import {
  CloseOutlined,
  LoadingOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { AppContext } from "~/contexts";
import { debounce, isEmpty, isNil, omitBy } from "lodash";
import { TiltButton } from "~/components/common";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { useMatches } from "@remix-run/react";
import { Search } from "lucide-react";
const { useToken } = theme;
const { Countdown } = Statistic;
const { Text } = Typography;

interface PartyIndexHeaderProps {
  children: any;
  fetcher: any;
  onRefresh: () => void;
  searchParams: any;
  submit: any;
}

export function PartyIndexHeader(props: PartyIndexHeaderProps) {
  const matches = useMatches();
  const { autoRefreshInterval, manualRefreshInterval } = matches[0].data;
  const { children, fetcher, onRefresh, searchParams, submit } = props;
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const { scheme } = useContext(AppContext);
  const { t } = useTranslation();
  const { token } = useToken();
  const [manualDeadline, setManualDeadline] = useState<any>(
    dayjs().add(manualRefreshInterval, "seconds")
  );
  const [manualCountdown, setManualCountdown] = useState<boolean>(false);
  const [autoDeadline, setAutoDeadline] = useState<any>(
    dayjs().add(autoRefreshInterval, "seconds")
  );
  const [autoCountdown, setAutoCountdown] = useState<boolean>(true);

  const searchCardStyle = {
    height: 54,
    marginTop: 10,
    borderRadius: 0,
    boxShadow: "none",
    overflow: "visible",
    zIndex: 1,
  };
  const searchCardBodyStyle = {
    padding: 5,
    backgroundColor: "inherit",
    borderRadius: 10,
    boxShadow:
      scheme === "dark"
        ? "0px 4px 15px -5px rgba(255,255,255,0.75)"
        : "0px 4px 15px -5px rgba(0,0,0,0.75)",

    overflow: "hidden",
  };

  const handleOpenSearch = () => {
    setOpenSearch(true);
  };

  const handleCloseSearch = () => {
    setOpenSearch(false);
  };

  const handleManualCountdownFinish = () => {
    setManualCountdown(false);
  };

  const handleAutoCountdownFinish = () => {
    setAutoCountdown(false);
    const timeout = setTimeout(() => {
      handleAutoRefresh();
      clearTimeout(timeout);
    }, 300);
  };

  const handleManualRefresh = () => {
    setManualCountdown(true);
    setManualDeadline(dayjs().add(manualRefreshInterval, "seconds"));
    setAutoDeadline(dayjs().add(autoRefreshInterval, "seconds"));
    onRefresh();
  };

  const handleAutoRefresh = () => {
    setAutoCountdown(true);
    setAutoDeadline(dayjs().add(autoRefreshInterval, "seconds"));
    onRefresh();
  };

  const handleSearch = useCallback(
    (e: any) => {
      const searchString = e.target.value;
      let newSearchParams = { ...searchParams };
      if (searchString.length > 0) {
        newSearchParams.q = searchString;
        submit(
          omitBy(newSearchParams, (v) => isNil(v) && isEmpty(v)),
          { method: "get", preventScrollReset: true }
        );
      } else {
        delete newSearchParams["q"];
        submit(
          omitBy(newSearchParams, (v) => isNil(v) && isEmpty(v)),
          { method: "get", preventScrollReset: true }
        );
      }
    },
    [fetcher, searchParams, submit]
  );

  const handleDebounceSearch = useMemo(
    () => debounce(handleSearch, 500),
    [handleSearch]
  );

  return (
    <>
      <Row gutter={[15, 15]} wrap style={{ alignItems: "center" }}>
        <Col flex="auto">
          <Space>{children}</Space>
        </Col>
        <Col flex="none">
          <Space size={15}>
            <TiltButton
              style={{
                opacity: manualCountdown ? 0.5 : 1,
              }}
              onClick={handleManualRefresh}
              disabled={manualCountdown}
            >
              <Space style={{ alignItems: "center" }} size={5}>
                {t("refresh")}
                {manualCountdown && (
                  <Countdown
                    value={manualDeadline}
                    onFinish={handleManualCountdownFinish}
                    format="s"
                    valueStyle={{
                      fontSize: 12,
                      color: "#000",
                    }}
                  />
                )}
              </Space>
            </TiltButton>
            <Text>{t("refresh in")}</Text>
            {autoCountdown && (
              <Countdown
                value={autoDeadline}
                onFinish={handleAutoCountdownFinish}
                format="s"
                valueStyle={{
                  fontSize: 12,
                  color: "inherit",
                }}
              />
            )}
            <Text>{t(`second`)}</Text>
            {/* <Tooltip
              title={t("auto refresh countdown")}
              placement="top"
              arrow={false}
            >
              <div style={{ position: "relative", color: token.colorTextBase }}>
                <LoadingOutlined style={{ color: "inherit", fontSize: 36 }} />
                {autoCountdown && (
                  <Countdown
                    value={autoDeadline}
                    onFinish={handleAutoCountdownFinish}
                    format="s"
                    valueStyle={{
                      fontSize: 12,
                      color: "inherit",
                    }}
                    style={{
                      position: "absolute",
                      color: "inherit",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                )}
              </div>
            </Tooltip> */}
            <Text>
              {openSearch ? (
                <CloseOutlined
                  style={{ fontSize: 20 }}
                  onClick={handleCloseSearch}
                />
              ) : (
                <Search style={{ fontSize: 20 }} onClick={handleOpenSearch} />
              )}
            </Text>
          </Space>
        </Col>
      </Row>
      {openSearch && (
        <Card
          bordered={false}
          bodyStyle={searchCardBodyStyle}
          style={searchCardStyle}
        >
          <Input
            autoFocus
            bordered={false}
            prefix={
              <Search
                className="site-form-item-icon"
                style={{ fontSize: 20, paddingRight: 10 }}
              />
            }
            defaultValue={searchParams && searchParams.q ? searchParams.q : ""}
            onChange={handleDebounceSearch}
          />
        </Card>
      )}
    </>
  );
}
