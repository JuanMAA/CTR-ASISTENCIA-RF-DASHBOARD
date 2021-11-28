import { Layout, Menu, Breadcrumb, Badge, Avatar } from "antd";
import logo from "./logo.svg";
import {
  CalendarOutlined,
  PieChartOutlined,
  ClockCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function App() {
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

          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Principal
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Usuarios">
              <Menu.Item icon={<UserOutlined />} key="2">
                Listado
              </Menu.Item>
              <Menu.Item icon={<UserOutlined />} key="3">
                Crear usuario
              </Menu.Item>
              <Menu.Item icon={<UserOutlined />} key="4">
                Tipos Usuario
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<CalendarOutlined />} title="Horarios">
              <Menu.Item icon={<CalendarOutlined />} key="5">
                Listado
              </Menu.Item>
              <Menu.Item icon={<CalendarOutlined />} key="6">
                Crear Horario
              </Menu.Item>
              <Menu.Item icon={<CalendarOutlined />} key="7">
                Feriados
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design 2021-2022 - Created by Estudiantes AIEP
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}
