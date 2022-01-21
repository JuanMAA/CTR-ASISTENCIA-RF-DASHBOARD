import React from "react";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
} from "antd";
import TextArea from "antd/lib/input/TextArea";

export default function ComponenteMantenedorFeriados() {

  return (
    <>
      <Card
        title={"Mantenedor de Feriados"}
        style={{ height: "100%" }}
        extra={<></>}
      >
        <Form
          name="form-feriados"
          labelAlign="left"
          layout={"vertical"}
          colon={false}
        >
          <Row>
            <Col xl={24} md={12} xxl={8} style={{ padding: 5 }}>
              <Form.Item
                label="Nombre"
                name="name"
                rules={[{ required: true }]}
              >
                <Input
                  maxLength={200}
                  placeholder="Ingrese nombre feriado"
                />
              </Form.Item>
            </Col>
            <Col xl={24} md={12} xxl={8} style={{ padding: 5 }}>
              <Form.Item
                label="Detalle"
                name="birth_date"
                rules={[{ required: true }]}
              >
                <TextArea
                  style={{ width: "100%" }}
                  placeholder="Ingrese detalle del feriado."
                />
              </Form.Item>
            </Col>
            <Col xl={24} md={12} xxl={8} style={{ padding: 5 }}>
              <Form.Item
                label="Inicio Feriado"
                name="start_datetime"
                rules={[{ required: true }]}
              >
                <DatePicker
                  style={{ width: "100%" }}
                  placeholder="Ingrese fecha de inicio"
                />
              </Form.Item>
            </Col>
            <Col xl={24} md={12} xxl={8} style={{ padding: 5 }}>
              <Form.Item
                label="Fin Feriado"
                name="end_datetime"
              >
                <DatePicker
                  style={{ width: "100%" }}
                  placeholder="Ingrese fecha de fin"
                />
              </Form.Item>
            </Col>
            <Col xl={24}>
              <Divider />
            </Col>
            <Col xl={24} md={12} xxl={8} style={{ padding: 5 }}>
              <Button block type="primary">
                Guardar Feriado
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </>
  );
}
