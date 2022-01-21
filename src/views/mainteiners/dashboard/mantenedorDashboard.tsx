import { Button, Calendar, Card } from "antd";

export default function ComponenteDashboard() {
  return (
    <>
      <Card
        title={"Mi Horario"}
        style={{ height: "100%" }}
        extra={
          <>
            {" "}
            <Button type="primary" size="large" block>
              Descargar Informe Mensual
            </Button>
          </>
        }
      >
        <Calendar />
      </Card>
    </>
  );
}
