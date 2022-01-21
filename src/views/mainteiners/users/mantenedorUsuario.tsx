import React from "react";
import { Button, Card, Col, DatePicker, Divider, Form, Input, Row, Select } from "antd";

export default function ComponenteMantenedorUsuarios() {
  const { Option } = Select;

  return (
    <>
      <Card
        title={"Mantenedor de Usuario"}
        style={{ height: "100%" }}
        extra={<></>}
      >
        <Form
          name="form-usuario"
          labelAlign="left"
          layout={"vertical"}
          colon={false}
        >
          <Row>
            <Col xl={24} md={12} xxl={8} style={{ padding: 5 }}>
              <Form.Item
                label="Email/correo"
                name="email"
                rules={[{ required: true }]}
              >
                <Input maxLength={200} placeholder="Ingrese correo/email" />
              </Form.Item>
            </Col>
            <Col xl={24} md={12} xxl={8} style={{ padding: 5 }}>
              <Form.Item
                label="Nombre Empleado"
                name="name"
                rules={[{ required: true }]}
              >
                <Input
                  maxLength={200}
                  placeholder="Ingrese nombre del usuario"
                />
              </Form.Item>
            </Col>
            <Col xl={24} md={12} xxl={8} style={{ padding: 5 }}>
              <Form.Item
                label="Fecha nacimiento"
                name="birth_date"
                rules={[{ required: true }]}
              >
                <DatePicker
                  style={{ width: "100%" }}
                  placeholder="Ingrese fecha nacimiento usuario"
                />
              </Form.Item>
            </Col>
            <Col xl={24} md={12} xxl={8} style={{ padding: 5 }}>
              <Form.Item
                label="Fecha inicio del contrato"
                name="contract_start_date"
                rules={[{ required: true }]}
              >
                <DatePicker
                  style={{ width: "100%" }}
                  placeholder="Ingrese fecha de ingreso"
                />
              </Form.Item>
            </Col>
            <Col xl={24} md={12} xxl={8} style={{ padding: 5 }}>
              <Form.Item
                label="Fecha inicio del contrato"
                name="contract_end_date"
              >
                <DatePicker
                  style={{ width: "100%" }}
                  placeholder="Ingrese fecha de finalizacion de contrato"
                />
              </Form.Item>
            </Col>
            <Col xl={24} md={12} xxl={8} style={{ padding: 5 }}>
              <Form.Item
                label="Horario"
                name="user_id"
                rules={[{ required: true }]}
              >
                <Select style={{ width: "100%" }} placeholder="Seleccione un Horario">
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={24}>
              <Divider />
            </Col>
            <Col xl={24} md={12} xxl={8} style={{ padding: 5 }}>
              <Button block type="primary">Guardar Usuario</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </>
  );
}
