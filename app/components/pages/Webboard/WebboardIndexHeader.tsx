import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  Card,
  Col,
  Divider,
  Input,
  Result,
  Row,
  Select,
  Space,
  Typography,
} from "antd";
import {
  CloseOutlined,
  InboxOutlined,
  LoadingOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { AppContext } from "~/contexts";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { debounce, isEmpty, isNil, omitBy } from "lodash";
import { Search } from "lucide-react";

const { Text } = Typography;

interface WebboardIndexHeaderProps {
  children: any;
  fetcher: any;
  searchParams: any;
  submit: any;
}

export function WebboardIndexHeader(props: WebboardIndexHeaderProps) {
  const { children, fetcher, searchParams, submit } = props;
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [tagOptions, setTagOptions] = useState<any>(null);
  const { scheme } = useContext(AppContext);
  const { t } = useTranslation();

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
    setTagOptions(null);
  };

  const handleSearch = useCallback(
    (e: any) => {
      const searchString = e.target.value;
      let newSearchParams = { ...searchParams };
      if (searchString.length > 0) {
        if (searchString.indexOf("#") > -1) {
          if (searchString.length > 0) {
            fetcher.submit(
              { name: searchString },
              { method: "post", action: "/resources/tags" }
            );
          }
          if (newSearchParams.q) {
            delete newSearchParams["q"];
            submit(
              omitBy(newSearchParams, (v) => isNil(v) && isEmpty(v)),
              { method: "get", preventScrollReset: true }
            );
          }
        } else {
          setTagOptions(null);
          newSearchParams.q = searchString;
          submit(
            omitBy(newSearchParams, (v) => isNil(v) && isEmpty(v)),
            { method: "get", preventScrollReset: true }
          );
        }
      } else {
        setTagOptions(null);
        delete newSearchParams["q"];
        submit(
          omitBy(newSearchParams, (v) => isNil(v) && isEmpty(v)),
          { method: "get", preventScrollReset: true }
        );
      }
    },
    [fetcher, searchParams, submit]
  );

  const handleSortChanged = useCallback(
    (order: string) => {
      let newSearchParams = { ...searchParams };
      if (order.length > 0) {
        newSearchParams.orderBy = order;
      } else {
        delete newSearchParams["orderBy"];
      }
      submit(
        omitBy(newSearchParams, (v) => isNil(v) && isEmpty(v)),
        { method: "get", preventScrollReset: true }
      );
    },
    [searchParams, submit]
  );

  const handleDebounceSearch = useMemo(
    () => debounce(handleSearch, 500),
    [handleSearch]
  );

  useEffect(() => {
    if (
      fetcher &&
      fetcher.data &&
      fetcher.state === "idle" &&
      fetcher.data.tags
    ) {
      setTagOptions(fetcher.data.tags);
    }
  }, [fetcher]);

  return (
    <>
      <Row gutter={[15, 15]} wrap style={{ alignItems: "center" }}>
        <Col flex="auto">
          <Space>{children}</Space>
        </Col>
        <Col flex="none">
          <Space size={20}>
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
            <Select
              defaultValue={
                searchParams && searchParams.orderBy ? searchParams.orderBy : ""
              }
              style={{ minWidth: 185 }}
              onSelect={handleSortChanged}
              options={[
                { label: t("last update"), value: "" },
                { label: t("lastest post"), value: "post" },
                { label: t("most comments"), value: "comments" },
                { label: t("most reactions"), value: "reactions" },
              ]}
            />
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
          {tagOptions !== null && (
            <div>
              <Divider style={{ marginTop: 10, marginBottom: 0 }} />
              <Space
                direction="vertical"
                style={{ display: "flex", maxHeight: 400, overflow: "auto" }}
                size={0}
              >
                {fetcher && fetcher.state === "loading" ? (
                  <LoadingOutlined style={{ fontSize: 20 }} spin />
                ) : tagOptions.length > 0 ? (
                  tagOptions.map((tag: any) => (
                    <Link
                      className={`suggested-options ${scheme}`}
                      key={tag.name}
                      to={`/tags/${tag.id}`}
                      style={{
                        display: "flex",
                        padding: 10,
                        borderRadius: 6,
                      }}
                    >
                      <Text>{`#${tag.name}`}</Text>
                    </Link>
                  ))
                ) : (
                  <Result
                    icon={<InboxOutlined />}
                    title={t("no participant")}
                  />
                )}
              </Space>
            </div>
          )}
        </Card>
      )}
    </>
  );
}
