import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { BioSample, FingerPosition } from "@digitalpersona/core";
import {
  EnrollmentContext,
  FingerprintsEnroll,
} from "@digitalpersona/enrollment";

export default function Auth() {

  let submitFingerprints = async (
    context: EnrollmentContext,
    samples: BioSample[],
    pos: FingerPosition
  ) => {
    try {
      const api = new FingerprintsEnroll(context);
      await api.enroll(pos, samples);
    } catch (error) {
      console.error("error ", error);
    }
  };

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
