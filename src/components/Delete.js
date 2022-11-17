import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import React from 'react';
const { confirm } = Modal;

const showDeleteConfirm = () => {
  confirm({
    title: '정말로 삭제하시겠습니까?',
    icon: <ExclamationCircleOutlined />,
    okText: '삭제',
    okType: 'danger',
    cancelText: '취소',

    onOk() {
      console.log('OK');
    },

    onCancel() {
      console.log('Cancel');
    },
  });
};


const Delete = () => (
  <Space wrap>
    <Button onClick={showDeleteConfirm} >
        삭제
    </Button>
  </Space>
);

export default Delete;