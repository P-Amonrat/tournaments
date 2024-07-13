import {
  Avatar,
  Card,
  Divider,
  Drawer,
  Space,
  theme,
  Tooltip,
  Typography,
} from "antd";
import { ControlOutlined } from "@ant-design/icons";
import { indexOf, isArray } from "lodash";
import React, { useState } from "react";
import { Media, TiltButton } from "~/components/common";
import { useTranslation } from "react-i18next";
import { useMatches } from "@remix-run/react";
const { Text, Title } = Typography;
const { useToken } = theme;

interface IndexFilterProps {
  alwaysActive?: boolean;
  filters: any[];
  values?: any;
  onFilterClicked: (name: string, value: string | number) => void;
  mobileAppendChildren?: React.ReactNode;
}

export function IndexFilter(props: IndexFilterProps) {
  const {
    alwaysActive,
    filters,
    onFilterClicked,
    values,
    mobileAppendChildren,
  } = props;
  const { token } = useToken();
  const { t } = useTranslation();
  const [mobileCollapsed, setMobileCollapsed] = useState<boolean>(false);
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;

  let filteredValues = {} as any;
  if (values) {
    Object.keys(values).map((key: any) => {
      filteredValues[key] = isArray(values[key])
        ? values[key]
        : values[key].split(",");
    });
  }

  const isActive = (values: any, name: string, value: string | number) => {
    return alwaysActive
      ? true
      : values &&
          values[name] &&
          values[name].length &&
          indexOf(values[name], `${value}`) > -1;
  };

  const handleOpenCollapsed = () => {
    setMobileCollapsed(true);
  };

  const handleCloseCollapsed = () => {
    setMobileCollapsed(false);
  };

  const renderContent = () => {
    return (
      <Space direction="vertical" size={10} style={{ display: "flex" }}>
        <Title level={4}>{t("Filters")}</Title>
        {filters.map((filter: any) => (
          <Space
            key={filter.name}
            size={10}
            direction="vertical"
            style={{ display: "flex" }}
          >
            <Title level={5} style={{ marginTop: 0 }}>
              {filter.title}
            </Title>
            <Space
              wrap
              size={5}
              style={{
                display: "flex",
                paddingInline: filter.type === "tilt-button" ? 5 : 0,
              }}
            >
              {filter.options.map((option: any) =>
                filter.type === "avatar" ? (
                  <Tooltip
                    key={`${option.name}-${option.value}`}
                    title={option.label}
                    placement="bottom"
                    arrow={false}
                  >
                    <Avatar
                      src={`${cdnUrl}/${option.image}`}
                      size={60}
                      onClick={() => onFilterClicked(filter.name, option.value)}
                      style={
                        isActive(filteredValues, filter.name, option.value)
                          ? { opacity: 1, cursor: "pointer" }
                          : {
                              opacity: 0.5,
                              filter: "grayscale(100%)",
                              cursor: "pointer",
                            }
                      }
                    />
                  </Tooltip>
                ) : (
                  <TiltButton
                    color={
                      isActive(filteredValues, filter.name, option.value)
                        ? "primary"
                        : "transparent"
                    }
                    key={`${filter.name}-${option.value}`}
                    onClick={() => onFilterClicked(filter.name, option.value)}
                    style={{
                      borderColor: token.colorBorder,
                      fontStyle: "italic",
                      fontWeight: 400,
                      paddingBlock: 6,
                    }}
                  >
                    <Space size={5}>
                      {option.image ? (
                        <Avatar src={option.image} size={20} shape="square" />
                      ) : (
                        <></>
                      )}
                      <Text>{option.label}</Text>
                    </Space>
                  </TiltButton>
                )
              )}
            </Space>
            <Divider style={{ marginBlock: 15 }} />
          </Space>
        ))}
      </Space>
    );
  };

  return (
    <>
      <Media greaterThan="sm">{renderContent()}</Media>
      <Media at="sm">
        <Card bodyStyle={{ padding: 10, cursor: "pointer" }}>
          <Space
            onClick={handleOpenCollapsed}
            size={10}
            style={{ display: "flex", fontSize: 20 }}
          >
            <ControlOutlined />
            <Text>{t("filter")}</Text>
          </Space>
        </Card>
        <Drawer
          placement="left"
          closable={false}
          onClose={handleCloseCollapsed}
          open={mobileCollapsed}
          width={250}
          styles={{ body: { padding: "30px 20px" } }}
        >
          {renderContent()}
          {mobileAppendChildren ? mobileAppendChildren : <></>}
        </Drawer>
      </Media>
    </>
  );
}
