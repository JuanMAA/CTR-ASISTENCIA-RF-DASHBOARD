import { Menu } from "antd";
import {
  CalendarOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

export default function MenuComponent() {
  return (
    <>
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
    </>
  );
}
