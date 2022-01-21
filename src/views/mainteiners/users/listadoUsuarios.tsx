import { Button, Card, Col, Row, Table } from "antd";
import { useHistory } from "react-router-dom";

export default function ComponenteListadoUsuarios() {
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
      title: "Correo",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Fecha Naciemineto",
      dataIndex: "birth_date",
      key: "birth_date",
    },
    {
      title: "Fecha Inicio de Contrato",
      dataIndex: "contract_start_date",
      key: "contract_start_date",
    },
    {
      title: "Fecha Fin de Contrato",
      dataIndex: "contract_start_date",
      key: "contract_end_date",
    },
    {
      title: "Estado",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "action",
      render: (usuarios: any) => (
        <>
          <Row>
            <Col xs={12} style={{ padding: 2 }}>
              <Button
                onClick={() => history.push(`/usuario?=${usuarios.id}`)}
                size="small"
                block
                type="primary"
              >
                Editar
              </Button>
            </Col>
            <Col xs={12} style={{ padding: 2 }}>
              <Button size="small" block type="primary">
                Generar Informe
              </Button>
            </Col>
          </Row>
        </>
      ),
    },
  ];

  return (
    <>
      <Card title={"Listado de Usuarios"} style={{ height: "100%" }}>
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    </>
  );
}
