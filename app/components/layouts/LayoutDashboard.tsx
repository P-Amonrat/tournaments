import * as React from "react";
import { Layout } from "antd";
import { Navbar, LayoutFooter } from ".";
const { Content } = Layout;
interface LayoutDashboardProps {
  children?: any;
}

export const LayoutDashboard: React.FC<LayoutDashboardProps> = (
  props: LayoutDashboardProps
) => {
  const { children } = props;

  return (
    <Layout style={{ minHeight: "100vh", paddingTop: 64, overflowX: "hidden" }}>
      <Navbar />
      <Content style={{ position: "relative" }}>{children}</Content>
      <LayoutFooter />
    </Layout>
  );
};
