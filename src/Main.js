import React from "react";
import "./Main.css";
import Cancle from "./components/Cancle.js";
import Delete from "./components/Delete.js";
import {
  HomeOutlined,
  UserOutlined,
  ShoppingOutlined,
  ProfileOutlined,
  MessageOutlined,
  TeamOutlined,
  CalendarOutlined,
  SettingOutlined
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;
const items = [
  HomeOutlined,
  UserOutlined,
  ShoppingOutlined,
  ProfileOutlined,
  MessageOutlined,
  TeamOutlined,
  CalendarOutlined,
  SettingOutlined
].map((icon, index) => {
  const id = String(index);
  const menu = [
    "대시보드",
    "회원",
    "상품",
    "커리큘럼",
    "문자메시지",
    "구성원",
    "일정",
    "설정"
  ];
  const address = [
    "/dashboard",
    "/customers",
    "/commodity",
    "/curriculum",
    "/curridetail",
    "/message",
    "/members",
    "/calendar",
    "/setting"
  ];
  return {
    key: `${menu[id]}`,
    icon: React.createElement(icon),
    label: `${menu[id]}`,
    link: `${address[id]}`
  };
});

const Main = () => {
  const activeStyle = {
    color: "green",
    fontSize: "2rem"
  };

  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" />
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
                borderRight: 0
              }}
              items={items}
            />
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px"
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0"
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              <div>
                <li>
                  <Link to="/login">로그인</Link>
                </li>
                <li>
                  <Link to="/setting">설정</Link>
                </li>
                <li>닫기, 삭제 창</li>
                <Cancle />
                <Delete />
                <li>
                  <Link to="/curriculum">커리큘럼</Link>
                </li>
                <li>
                  <Link to="/curridetail">커리큘럼 상세 정보</Link>
                </li>
                <li>
                  <Link to="/commodity">상품</Link>
                </li>
                <li>
                  <Link to="/calendar">일정</Link>
                </li>
                <li>
                  <Link to="/calendar/update">일정 조회/수정</Link>
                </li>
              </div>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Main;
