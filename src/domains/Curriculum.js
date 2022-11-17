import { Table, Modal } from "antd";
import React, { useState } from "react";
import "./Curriculum.css";
import SearchForm from "../components/SearchForm.js";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import CurriDetail from "./CurriDetail.js";

const columns = [
  {
    title: "장애",
    dataIndex: "name"
  },
  {
    title: "커리큘럼",
    dataIndex: "curriculum"
  }
];
const data = [
  {
    key: "1",
    name: "장애에 대한 내용",
    curriculum: "커리큘럼에 대한 내용"
  },
  {
    key: "2",
    name: "장애에 대한 내용",
    curriculum: "커리큘럼에 대한 내용"
  },
  {
    key: "3",
    name: "장애에 대한 내용",
    curriculum: "커리큘럼에 대한 내용"
  }
];

const Curriculum = () => {
  const [size, setSize] = useState("large");
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
    <div className="curriDiv">
      <div className="curriDiv1">
        <SearchForm />
        <Button type="primary" onClick={showModal}>
          <PlusOutlined />
          커리큘럼 추가
        </Button>
        <Modal
          title="커리큘럼 추가"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={1000}
        >
          <CurriDetail />
        </Modal>
      </div>
      <br />
      <Table columns={columns} dataSource={data} size="middle" />
    </div>
  );
};

export default Curriculum;
