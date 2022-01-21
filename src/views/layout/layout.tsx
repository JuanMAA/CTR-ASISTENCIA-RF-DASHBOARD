import { Layout, Button, Affix } from "antd";
import { ClockCircleOutlined, LogoutOutlined } from "@ant-design/icons";
import { useState } from "react";
import MenuComponent from "../layout/menu";

const { Header, Content, Sider } = Layout;

type Props = {
  children: Element | JSX.Element;
};

export default function LayoutComponent(props: Props) {
  const [collapsed, setCollapsed] = useState(false as any);

  return (
    <>
      <Layout style={{ minHeight: "100vh" }} hasSider>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
          style={{
            background: "rgba(255, 255, 255, 0.3)",
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div
            style={{
              height: 60,
              width: "100%",
              paddingTop: 15,
              margin: "auto",
              display: "block",
              color: "black",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            <ClockCircleOutlined twoToneColor="#eb2f96" />{" "}
            {!collapsed ? "Reloj Control" : ""}
          </div>
          <MenuComponent />
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Affix offsetTop={0}>
            <Header
              className="site-top-bar"
              style={{ padding: 0, textAlign: "right", paddingRight: 20, width: "100%" }}
            >
              <Button type="primary">
                Cerrar Sesión <LogoutOutlined />
              </Button>
            </Header>
          </Affix>
          <Content style={{ margin: 40 }}>{props.children}</Content>
          {/*<FooterComponent />*/}
        </Layout>
      </Layout>
    </>
  );
}
