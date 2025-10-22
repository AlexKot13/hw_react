import { useState } from "react"
import { Form, Input, Button, Card, Typography } from "antd"

import './App.css';


function App() {
  
  const {Title} = Typography
  const [form] = Form.useForm()
  const [formData, setFormData] = useState(null)

  const onFinisch = (values) => {
    setFormData(values)
    form.resetFields()
  }

  return (
    <div className="container">
      <Title className="title">FORM DESCRIPTION</Title>
      <Form
      form={form}
      name="auth"
      onFinish={onFinisch}
      layout="vertical"
      >

        <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please enter the name!'}]}
        >
          <Input placeholder="Name"/>
        </Form.Item>

        <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please enter your description!'}]}
        >
          <Input.TextArea placeholder="Description" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" >
            Send Form
          </Button>
        </Form.Item>

      </Form>

      {formData && (
        <Card title="Send data" className="card">
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Describe:</strong> {formData.name}</p>
        </Card>
      )}
    </div>
  )
}

export default App
