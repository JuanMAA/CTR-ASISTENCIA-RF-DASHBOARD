import { Button, Card, Col, Row, Table } from "antd";
import { useHistory } from "react-router-dom";

export default function ComponenteListadoFeriados() {
  let history = useHistory();

  const dataSource = [
    {
      name: "Mike",
    }
  ];

  const columns = [
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
      title: "Action",
      dataIndex: "",
      key: "action",
      render: (horarios: any) => (
        <>
          <Row>
            <Col xs={24} >
              <Button
                onClick={() => history.push(`/horario?=${horarios.id}`)}
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
      <Card title={"Listado de Horarios"} style={{ height: "100%" }}>
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    </>
  );
}
