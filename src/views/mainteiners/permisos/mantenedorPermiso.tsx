import React from "react";
import { Button, Card, Col, DatePicker, Divider, Form, Input, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";

export default function ComponenteMantenedorPermisos() {
  const { Option } = Select;

  return (
    <>
      <Card
        title={"Mantenedor de Permisos"}
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
                label="Nombre"
                name="name"
                rules={[{ required: true }]}
              >
                <Input
                  maxLength={200}
                  placeholder="Ingrese nombre a dar al permiso"
                />
              </Form.Item>
            </Col>
            <Col xl={24} md={12} xxl={8} style={{ padding: 5 }}>
              <Form.Item
                label="Empleado"
                name="user_id"
                rules={[{ required: true }]}
              >
                <Select style={{ width: "100%" }} placeholder="Seleccione un empleado">
                  <Option value="lucy">Lucy</Option>
                </Select>
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
                  placeholder="Ingrese detalle del permiso."
                />
              </Form.Item>
            </Col>
            <Col xl={24} md={12} xxl={8} style={{ padding: 5 }}>
              <Form.Item
                label="Inicio Permiso"
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
                label="Fin Permiso"
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
                Guardar Permiso
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </>
  );
}
