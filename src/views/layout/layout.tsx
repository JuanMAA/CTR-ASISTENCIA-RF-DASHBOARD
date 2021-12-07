import { Layout, Breadcrumb, Card, Avatar } from "antd";
import { ClockCircleOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import MenuComponent from "../layout/menu";
import { Link, useLocation } from "react-router-dom";
//import FooterComponent from "../layout/footer";

const { Header, Content, Sider } = Layout;

type Props = {
  children: Element | JSX.Element;
};

const breadcrumbNameMap = {
  "/profile": "Perfil",
  "/data": "Tabla",
  "/data/usuario": "Usuario",
  "/data/tipos-usuario": "Tipo de Usuario",
  "/data/usuario/new": "Crear",
  "/data/rol": "Rol",
  "/data/rol/new": "Crear",
  "/data/horarios": "Horario",
  "/data/horarios/new": "Crear",
} as any;

export default function LayoutComponent(props: Props) {
  const [collapsed, setCollapsed] = useState(false as any);

  const location = useLocation();

  const pathSnippets = location.pathname.split("/").filter((i) => i);
  console.log("pathSnippets",pathSnippets)

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    let custom;
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;

    if (pathSnippets.length > 1 && pathSnippets[0] === "data"){
      custom = `/data?t=${pathSnippets[1]}`;
    }

    return (
      <Breadcrumb.Item key={url}>
        <Link to={custom !== undefined ? custom : url}>
          {/\d/.test(url) ? "Modificar" : breadcrumbNameMap[url]}
        </Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="apps">
      <Link to="/dashboard">Aplicaciones</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

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
            <ClockCircleOutlined twoToneColor="#eb2f96" />{" "}
            {!collapsed ? "Reloj Control" : ""}
          </div>
          <MenuComponent />
        </Sider>
        <Layout>
          <Header
            className="site-top-bar"
            style={{ padding: 0, textAlign: "right", paddingRight: 20 }}
          >
            <Avatar
              className="icon-dynamic"
              size="large"
              icon={<UserOutlined />}
            />
          </Header>
          <Content style={{ margin: 20 }}>
            <Breadcrumb style={{ padding: 15 }}>{breadcrumbItems}</Breadcrumb>
            <Card title={location.pathname} style={{ minHeight: 700 }} extra={<></>}>
              {props.children}
            </Card>
          </Content>
          {/*<FooterComponent />*/}
        </Layout>
      </Layout>
    </>
  );
}
