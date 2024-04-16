import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      const registerData = await axios.post(
        "http://localhost:8000/user/register",
        formData
      );

      console.log(registerData);
      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={handleSubmit}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: "Please enter your name" }]}
      >
        <Input name="name" value={formData.name} onChange={handleInputChange} />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: "Please enter your email" },
          { type: "email", message: "Please enter a valid email" },
        ]}
      >
        <Input
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: "Please enter your password" }]}
      >
        <Input.Password
          value={formData.password}
          onChange={handleInputChange}
          name="password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {" "}
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Registration;
