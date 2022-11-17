import { Button, Modal, Space } from 'antd';
import React, { createContext } from 'react';
const ReachableContext = createContext(null);
const UnreachableContext = createContext(null);
const config = {
  title: '닫기',
  okText: '확인',
  cancelText: '취소',
  content: (
    <>
      <ReachableContext.Consumer>{(name) => `변경사항이 저장되지 않을 수 있습니다.`}</ReachableContext.Consumer>
      <br />
      <UnreachableContext.Consumer>{(name) => `창을 닫으시겠습니까?`}</UnreachableContext.Consumer>
    </>
  ),
};

const Cancle = () => {
  const [modal, contextHolder] = Modal.useModal();
  return (
    <ReachableContext.Provider value="Light">
      <Space>
        <Button
          onClick={() => {
            modal.confirm(config);
          }}
        >
          닫기
        </Button>
      </Space>
      {/* `contextHolder` should always be placed under the context you want to access */}
      {contextHolder}

      {/* Can not access this context since `contextHolder` is not in it */}
      <UnreachableContext.Provider value="Bamboo" />
    </ReachableContext.Provider>
  );
};

export default Cancle;