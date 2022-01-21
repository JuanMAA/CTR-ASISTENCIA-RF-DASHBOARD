import { Menu } from "antd";
import {
  CalculatorOutlined,
  CalendarOutlined,
  ContactsOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;

export default function MenuComponent() {
  return (
    <>
      <Menu theme="light" defaultSelectedKeys={["1"]} mode="vertical">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/dashboard">Principal</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Usuarios">
          <Menu.Item icon={<UserOutlined />} key="2">
            <Link to="/usuarios">Listado de Usuarios</Link>
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />} key="3">
            <Link to="/usuario">Editar/Crear Usuarios</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<CalendarOutlined />} title="Horarios">
          <Menu.Item icon={<CalendarOutlined />} key="5">
            <Link to="/horarios">Listado de Horarios</Link>
          </Menu.Item>
          <Menu.Item icon={<CalendarOutlined />} key="6">
            <Link to="/horario">Editar/Crear Horarios</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<CalendarOutlined />} title="Turnos">
          <Menu.Item icon={<CalendarOutlined />} key="7">
            <Link to="/turnos">Listado de Turnos</Link>
          </Menu.Item>
          <Menu.Item icon={<CalendarOutlined />} key="8">
            <Link to="/turno">Editar/Crear Turno</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<CalculatorOutlined />} title="Feriados">
          <Menu.Item icon={<CalendarOutlined />} key="9">
            <Link to="/feriados">Feriados</Link>
          </Menu.Item>
          <Menu.Item icon={<CalendarOutlined />} key="10">
            <Link to="/feriado">Editar/Crear Feriado</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" icon={<ContactsOutlined />} title="Permisos">
          <Menu.Item icon={<CalendarOutlined />} key="9">
            <Link to="/permisos">Permisos</Link>
          </Menu.Item>
          <Menu.Item icon={<CalendarOutlined />} key="10">
            <Link to="/permiso">Editar/Crear Permiso</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
}
