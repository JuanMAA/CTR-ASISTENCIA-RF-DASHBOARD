import { Button, Card, Col, Row, Table } from "antd";
import { useHistory } from "react-router-dom";

export default function ComponenteListadoHorarios() {
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
      title: "Detalle",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Inicio Feriado",
      dataIndex: "start_datetime",
      key: "start_datetime",
    },
    {
      title: "Fin Feriado",
      dataIndex: "end_datetime",
      key: "end_datetime",
    },
    
    {
      title: "Action",
      dataIndex: "",
      key: "action",
      render: (feriados: any) => (
        <>
          <Row>
            <Col xs={24} >
              <Button
                onClick={() => history.push(`/feriado?=${feriados.id}`)}
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
      <Card title={"Listado de Turnos"} style={{ height: "100%" }}>
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    </>
  );
}
