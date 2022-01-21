import React from "react";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  TimePicker,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import moment from "moment";

export default function ComponenteMantenedorTurnos() {
  return (
    <>
      <Card
        title={"Mantenedor de Turno"}
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
                <Input maxLength={200} placeholder="Ingrese un nombre para el turno" />
              </Form.Item>
            </Col>
            <Col xl={24} md={12} xxl={8} style={{ padding: 5 }}>
              <Form.Item label="Dia" name="day" rules={[{ required: true }]}>
                <DatePicker
                  style={{ width: "100%" }}
                  format="YYYY-MM-DD HH:mm:ss"
                />
              </Form.Item>
            </Col>
            <Col xl={24} md={12} xxl={8} style={{ padding: 5 }}>
              <Form.Item
                label="Inicio Turno"
                name="start"
                rules={[{ required: true }]}
              >
                <TimePicker
                  style={{ width: "100%" }}
                  defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
                />
              </Form.Item>
            </Col>
            <Col xl={24} md={12} xxl={8} style={{ padding: 5 }}>
              <Form.Item
                label="Fin Turno"
                name="end"
                rules={[{ required: true }]}
              >
                <TimePicker
                  style={{ width: "100%" }}
                  defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
                />
              </Form.Item>
            </Col>
            <Col xl={24} md={12} xxl={8} style={{ padding: 5 }}>
              <Form.Item
                label="Tolerancia Mínima Entrada"
                name="end"
                tooltip="En minutos Ej: 1 es igual a un minuto"
              >
                <InputNumber
                  style={{ width: "100%" }}
                  min={1}
                  max={25}
                  defaultValue={0}
                />{" "}
              </Form.Item>
            </Col>
            <Col xl={24} md={12} xxl={8} style={{ padding: 5 }}>
              <Form.Item
                label="Tolerancia Maxima Entrada"
                name="end"
                tooltip="En minutos Ej: 1 es igual a un minuto"
              >
                <InputNumber
                  style={{ width: "100%" }}
                  min={1}
                  max={25}
                  defaultValue={0}
                />{" "}
              </Form.Item>
            </Col>
            <Col xl={24} md={12} xxl={8} style={{ padding: 5 }}>
              <Form.Item
                label="Tolerancia Mínima Salida"
                name="end"
                tooltip="En minutos Ej: 1 es igual a un minuto"
              >
                <InputNumber
                  style={{ width: "100%" }}
                  min={1}
                  max={25}
                  defaultValue={0}
                />{" "}
              </Form.Item>
            </Col>
            <Col xl={24} md={12} xxl={8} style={{ padding: 5 }}>
              <Form.Item
                label="Tolerancia Maxima Salida"
                name="end"
                tooltip="En minutos Ej: 1 es igual a un minuto"
              >
                <InputNumber
                  style={{ width: "100%" }}
                  min={1}
                  max={10}
                  defaultValue={0}
                />{" "}
              </Form.Item>
            </Col>
            <Col xl={24}>
              <Divider />
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
