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
  Select,
} from "antd";
import TextArea from "antd/lib/input/TextArea";

export default function ComponenteMantenedorHorarios() {
  const { Option } = Select;

  return (
    <>
      <Card
        title={"Mantenedor de Horario"}
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
            <Col xl={24} md={12} xxl={12} style={{ padding: 5 }}>
              <Form.Item
                label="Nombre"
                name="name"
                rules={[{ required: true }]}
              >
                <Input placeholder="Ingrese un nombre para el horario" />
              </Form.Item>
            </Col>
            <Col xl={24} md={12} xxl={12} style={{ padding: 5 }}>
              <Form.Item
                label="Descripcion"
                name="description"
                rules={[{ required: true }]}
              >
                <TextArea
                  rows={3}
                  maxLength={200}
                  placeholder="Ingrese una descripcion para el horario"
                />
              </Form.Item>
            </Col>
            <Col xl={24}>
              <Divider orientation="left" plain>
                Turno Mañana
              </Divider>{" "}
            </Col>
            <Col xl={6}>
              <Form.Item
                label="Lunes Mañana"
                name="name"
                rules={[{ required: true }]}
              >
                <Select
                  defaultValue={"Sin Turno"}
                  style={{ width: "100%", padding: 5 }}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={6}>
              <Form.Item
                label="Martes Mañana"
                name="description"
                rules={[{ required: true }]}
              >
                <Select
                  defaultValue={"Sin Turno"}
                  style={{ width: "100%", padding: 5 }}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={6}>
              <Form.Item
                label="Miercoles Mañana"
                name="description"
                rules={[{ required: true }]}
              >
                <Select
                  defaultValue={"Sin Turno"}
                  style={{ width: "100%", padding: 5 }}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={6}>
              <Form.Item
                label="Jueves Mañana"
                name="description"
                rules={[{ required: true }]}
              >
                <Select
                  defaultValue={"Sin Turno"}
                  style={{ width: "100%", padding: 5 }}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={6}>
              <Form.Item
                label="Viernes Mañana"
                name="description"
                rules={[{ required: true }]}
              >
                <Select
                  defaultValue={"Sin Turno"}
                  style={{ width: "100%", padding: 5 }}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={6}>
              <Form.Item
                label="Sabado Mañana"
                name="description"
                rules={[{ required: true }]}
              >
                <Select
                  defaultValue={"Sin Turno"}
                  style={{ width: "100%", padding: 5 }}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={6}>
              <Form.Item
                label="Domingo Mañana"
                name="description"
                rules={[{ required: true }]}
              >
                <Select
                  defaultValue={"Sin Turno"}
                  style={{ width: "100%", padding: 5 }}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={24}>
              <Divider orientation="left" plain>
                Turno Tarde
              </Divider>{" "}
            </Col>
            <Col xl={6}>
              <Form.Item
                label="Lunes Tarde"
                name="name"
                rules={[{ required: true }]}
              >
                <Select
                  defaultValue={"Sin Turno"}
                  style={{ width: "100%", padding: 5 }}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={6}>
              <Form.Item
                label="Martes Tarde"
                name="description"
                rules={[{ required: true }]}
              >
                <Select
                  defaultValue={"Sin Turno"}
                  style={{ width: "100%", padding: 5 }}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={6}>
              <Form.Item
                label="Miercoles Tarde"
                name="description"
                rules={[{ required: true }]}
              >
                <Select
                  defaultValue={"Sin Turno"}
                  style={{ width: "100%", padding: 5 }}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={6}>
              <Form.Item
                label="Jueves Tarde"
                name="description"
                rules={[{ required: true }]}
              >
                <Select
                  defaultValue={"Sin Turno"}
                  style={{ width: "100%", padding: 5 }}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={6}>
              <Form.Item
                label="Viernes Tarde"
                name="description"
                rules={[{ required: true }]}
              >
                <Select
                  defaultValue={"Sin Turno"}
                  style={{ width: "100%", padding: 5 }}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={6}>
              <Form.Item
                label="Sabado Tarde"
                name="description"
                rules={[{ required: true }]}
              >
                <Select
                  defaultValue={"Sin Turno"}
                  style={{ width: "100%", padding: 5 }}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={6}>
              <Form.Item
                label="Domingo Tarde"
                name="description"
                rules={[{ required: true }]}
              >
                <Select
                  defaultValue={"Sin Turno"}
                  style={{ width: "100%", padding: 5 }}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={24}>
              <Divider orientation="left" plain>
                Turno Noche
              </Divider>{" "}
            </Col>
            <Col xl={6}>
              <Form.Item
                label="Lunes Noche"
                name="name"
                rules={[{ required: true }]}
              >
                <Select
                  defaultValue={"Sin Turno"}
                  style={{ width: "100%", padding: 5 }}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={6}>
              <Form.Item
                label="Martes Noche"
                name="description"
                rules={[{ required: true }]}
              >
                <Select
                  defaultValue={"Sin Turno"}
                  style={{ width: "100%", padding: 5 }}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={6}>
              <Form.Item
                label="Miercoles Noche"
                name="description"
                rules={[{ required: true }]}
              >
                <Select
                  defaultValue={"Sin Turno"}
                  style={{ width: "100%", padding: 5 }}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={6}>
              <Form.Item
                label="Jueves Noche"
                name="description"
                rules={[{ required: true }]}
              >
                <Select
                  defaultValue={"Sin Turno"}
                  style={{ width: "100%", padding: 5 }}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={6}>
              <Form.Item
                label="Viernes Noche"
                name="description"
                rules={[{ required: true }]}
              >
                <Select
                  defaultValue={"Sin Turno"}
                  style={{ width: "100%", padding: 5 }}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={6}>
              <Form.Item
                label="Sabado Noche"
                name="description"
                rules={[{ required: true }]}
              >
                <Select
                  defaultValue={"Sin Turno"}
                  style={{ width: "100%", padding: 5 }}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={6}>
              <Form.Item
                label="Domingo Noche"
                name="description"
                rules={[{ required: true }]}
              >
                <Select
                  defaultValue={"Sin Turno"}
                  style={{ width: "100%", padding: 5 }}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={24}>
              <Divider />
            </Col>
            <Col xl={24} md={12} xxl={8} style={{ padding: 5 }}>
              <Button block type="primary">
                Guardar Horario
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </>
  );
}
