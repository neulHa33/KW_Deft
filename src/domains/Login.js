import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import "../index.css";
import "./Login.css";
import { Link } from "react-router-dom";
import Register from "./Register.js";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="loginBox">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "아이디를 입력해주세요."
            }
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="아이디"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "비밀번호를 입력해주세요."
            }
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="비밀번호"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>아이디 저장</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            로그인
          </Button>
          <Link onClick={showModal}>비밀번호 최초등록</Link>
          <Modal
            title="비밀번호 최초 등록"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Register />
          </Modal>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;