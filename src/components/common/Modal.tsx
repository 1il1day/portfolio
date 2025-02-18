import React from 'react'
import styled from 'styled-components'

type Props = {
  title: string;
  contents: React.ReactNode;
  onClose?: () => void;
}

export default function Modal({title, contents, onClose}: Props) {
  return (
    <ModalBgWrap>
      <ModalWrap>
        <ModalInner>
          <div className="modal-inner-wrap">
            <ModalTitle>{title}</ModalTitle>
            {contents}
          </div>
        </ModalInner>
        <ModalButtonWrap>
          <ModalButton onClick={onClose}>확인</ModalButton>
        </ModalButtonWrap>
      </ModalWrap>
    </ModalBgWrap>
  )
}

const ModalBgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
`;
const ModalWrap = styled.div`
  width: calc(100% - 50px);
  max-width: 500px;
`;
const ModalInner = styled.div`
  max-height: 500px;
  overflow-y: auto;
  background-color: #fff;
  margin: auto;
  border-radius: 15px 15px 0 0;
  &::-webkit-scrollbar{
    display: none;
  }
  .modal-inner-wrap{
    padding: 26px 22px;
  }
`;
const ModalTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
`;
const ModalButtonWrap = styled.div`
  border-radius: 0 0 15px 15px;
  overflow: hidden;
`;
const ModalButton = styled.button`
  width: 100%;
  height: 60px;
  background-color: #fff;
  border: none;
  border-top: 1px solid #eee;
  border-right: 1px solid #eee;
  font-size: 16px;
  color: #3982F6;
  cursor: pointer;
  &:last-child{
    border-right: none;
  }
`;
