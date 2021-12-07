import { Menu } from "antd";
import {
  CalendarOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;

export default function MenuComponent() {
  return (
    <>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/dashboard">Principal</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Usuarios">
          <Menu.Item icon={<UserOutlined />} key="2">
            <Link to="/data?t=usuario">Listado</Link>
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />} key="3">
            <Link to="/data/usuario/new">Crear Usuario</Link>
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />} key="4">
            <Link to="/data?t=tipos-usuario">Tipos Usuario</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<CalendarOutlined />} title="Horarios">
          <Menu.Item icon={<CalendarOutlined />} key="5">
            <Link to="/data?t=horarios">Listado</Link>
          </Menu.Item>
          <Menu.Item icon={<CalendarOutlined />} key="6">
            <Link to="/data/horarios/new">Crear Horario</Link>
          </Menu.Item>
          <Menu.Item icon={<CalendarOutlined />} key="7">
            <Link to="/data?t=feriados">Feriados</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
}
