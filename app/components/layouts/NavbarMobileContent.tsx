import * as React from "react";
import { Link, useLocation } from "@remix-run/react";
import { Image, Layout, Menu, Typography } from "antd";
const { Content, Footer, Header } = Layout;
const { Text } = Typography;

interface NavbarMobileContentProps {
  menus?: any[];
  onMenuClicked: () => void;
}

export const NavbarMobileContent: React.FC<NavbarMobileContentProps> = (
  props: NavbarMobileContentProps
) => {
  const location = useLocation();
  const { menus, onMenuClicked } = props;

  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ paddingInline: 30 }}>
        <Link to="/" style={{ marginBottom: 20 }}>
          <Image width={100} src="/image/logo.png" preview={false} />
        </Link>
      </Header>
      <Content>
        <Menu
          selectedKeys={[location.pathname]}
          mode="inline"
          style={{
            border: "none",
            paddingBlock: 0,
          }}
          items={menus}
          onClick={onMenuClicked}
        />
      </Content>
      <Footer style={{ paddingInline: 30, textAlign: "center" }}>
        <Text style={{ fontSize: "10px", letterSpacing: "3px" }}>
          {`v1.0.0`}
        </Text>
      </Footer>
    </Layout>
  );
};
