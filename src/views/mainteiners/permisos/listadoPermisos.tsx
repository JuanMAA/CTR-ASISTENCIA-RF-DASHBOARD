import { Button, Card, Col, Row, Table } from "antd";
import { useHistory } from "react-router-dom";

export default function ComponenteListadoPermisos() {
  let history = useHistory();

  const dataSource = [
    {
      name: "Mike",
    }
  ];

  const columns = [
    {
      title: "Empleado",
      dataIndex: "user_id",
      key: "user_id",
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Descripcion",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Inicio Permiso",
      dataIndex: "start_datetime",
      key: "start_datetime",
    },
    {
      title: "Fin Permiso",
      dataIndex: "max_start",
      key: "end_datetime ",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "action",
      render: (permisos: any) => (
        <>
          <Row>
            <Col xs={24} >
              <Button
                onClick={() => history.push(`/turno?=${permisos.id}`)}
                size="middle"
                block
                type="primary"
              >
                Editar
              </Button>
            </Col>
          </Row>
        </>
      ),
    },
  ];

  return (
    <>
      <Card title={"Listado de Permisos"} style={{ height: "100%" }}>
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    </>
  );
}
