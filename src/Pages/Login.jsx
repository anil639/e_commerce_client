import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      const loginInfo = await axios.post(
        "http://localhost:8000/user/login",
        loginData
      );
      navigate("/");
      console.log(loginInfo);
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
        name="email"
        label="Email"
        rules={[
          { required: true, message: "Please enter your email" },
          { type: "email", message: "Please enter a valid email" },
        ]}
      >
        <Input
          name="email"
          value={loginData.email}
          onChange={handleInputChange}
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: "Please enter your password" }]}
      >
        <Input.Password
          value={loginData.password}
          onChange={handleInputChange}
          name="password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {" "}
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
