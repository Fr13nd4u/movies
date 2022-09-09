import React, { FC } from "react";
import styled from "styled-components";

interface IModal {
  title: string;
  active: boolean;
  setActive: (item: boolean) => void;
  children: JSX.Element;
}

const Modal: FC<IModal> = ({ title, active, setActive, children }) => {
  return (
    <ModalWrapper active={active} onClick={() => setActive(false)}>
      <ModalContent active={active} onClick={(e) => e.stopPropagation()}>
        <ModalTitle>
          <h3>{title}</h3>
          <button onClick={() => setActive(false)}>&#128473;</button>
        </ModalTitle>

        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div<{ active: boolean }>`
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  pointer-events: ${(props) => (props.active ? "all" : "none")};
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.4s ease-in;
`;

const ModalContent = styled.div<{ active: boolean }>`
  padding: 20px;
  border-radius: 12px;
  min-width: 400px;
  min-height: 200px;
  background: rgba(0, 0, 0, 0.8);

  transform: scale(${(props) => (props.active ? 1 : 0.5)});
  transition: transform 0.4s ease-in;
`;

const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 30px;

  button {
    border: none;
    font-size: 24px;
    padding: 0;
  }
`;

export default Modal;
