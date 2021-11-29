import { Form, Input, Button, Checkbox, Row, Col } from "antd";

export default function Auth() {
  return (
    <Row
      style={{
        height: "100%",
        width: "100%",
        position: "fixed",
      }}
    >
      <Col xs={24} style={{ margin: "auto" }}>
        <Form
          style={{
            width: "30em",
            margin: "auto",
          }}
          layout="vertical"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={() => {}}
          onFinishFailed={() => {}}
          autoComplete="off"
          size="large"
        >
          <Form.Item
            label="Usuario"
            name="username"
            rules={[{ required: true, message: "Debe ingresar el usuario!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Contraseña"
            name="password"
            rules={[
              { required: true, message: "Debe ingresar la contraseña!" },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Recordar</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Ingresar
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
