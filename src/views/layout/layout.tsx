import { Layout, Breadcrumb, Card, Avatar } from "antd";
import { ClockCircleOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import MenuComponent from "../layout/menu";
//import FooterComponent from "../layout/footer";

const { Header, Content, Sider } = Layout;

type Props = {
  children: Element | JSX.Element;
};

export default function LayoutComponent(props: Props) {
  const [collapsed, setCollapsed] = useState(false as any);

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        >
          <div
            style={{
              height: 60,
              width: "100%",
              paddingTop: 15,
              margin: "auto",
              display: "block",
              color: "white",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            <ClockCircleOutlined twoToneColor="#eb2f96" /> Reloj Control
          </div>
          <MenuComponent />
        </Sider>
        <Layout>
          <Header
            className="site-top-bar"
            style={{ padding: 0, textAlign: "right", paddingRight: 20 }}
          >
            <Avatar className="icon-dynamic" size="large" icon={<UserOutlined />} />
          </Header>
          <Content style={{ margin: 20 }}>
            <Breadcrumb style={{ padding: 15 }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <Card title="Componente" style={{ minHeight: 700 }} extra={<></>}>
              {props.children}
            </Card>
          </Content>
          {/*<FooterComponent />*/}
        </Layout>
      </Layout>
    </>
  );
}
