import { Button, Card, Col, Row, Table } from "antd";
import { useHistory } from "react-router-dom";

export default function ComponenteListadoTurnos() {
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
      title: "Dia",
      dataIndex: "day",
      key: "day",
    },
    {
      title: "Inicio Turno",
      dataIndex: "start",
      key: "start",
    },
    {
      title: "Fin Turno",
      dataIndex: "end",
      key: "end",
    },
    {
      title: "Tolerancia Maxima Entrada",
      dataIndex: "max_start",
      key: "max_start",
    },
    {
      title: "Tolerancia Maxima Salida",
      dataIndex: "max_end",
      key: "max_end",
    },
    {
      title: "Tolerancia Minima Entrada",
      dataIndex: "min_start",
      key: "min_start",
    },
    {
      title: "Tolerancia Minima Salida",
      dataIndex: "min_end",
      key: "min_end",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "action",
      render: (turnos: any) => (
        <>
          <Row>
            <Col xs={24} >
              <Button
                onClick={() => history.push(`/turno?=${turnos.id}`)}
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
