import React, { FunctionComponent, useEffect } from "react";
import ReactDOM from "react-dom";
import tw from "tailwind-styled-components";

import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

export interface ConfirmProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText?: string;
}

export const Modal: FunctionComponent<ConfirmProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {
  const Modal = (
    <React.Fragment>
      <Backdrop onClick={() => hide()} />
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText>{headerText}</HeaderText>
            <CloseButton onClick={hide}>X</CloseButton>
          </Header>
          <Content>{modalContent}</Content>
        </StyledModal>
      </Wrapper>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(Modal, document.body) : null;
};

export const Wrapper = tw.div`
fixed top-[25%] left-0 
  transform duration-200
  transition-all ease-in-out
  z-50
  w-full
  h-full
  outline-none 
`;

export const Backdrop = tw.div`
  fixed bg-slate-200 opacity-50
  w-full h-full
  top-0 left-0
  z-50 
`;

export const StyledModal = tw.div`
  z-50  relative mx-auto rounded-md bg-white
  w-full max-w-4xl h-fit top-0 bottom-3 
`;

export const Header = tw.div`
flex justify-between p-6 flex-row
`;

export const HeaderText = tw.div`
text-start mx-auto w-full cursor-pointer text-gray-700 pl-2 font-bold text-2xl
`;

export const CloseButton = tw.button`
rounded-sm cursor-pointer mr-2
`;

export const Content = tw.div`
  overflow-y-auto w-full flex flex-col items-center bg-white
  h-[80%] mx-auto rounded-md 
`;

export const Button = tw.div`
 flex justify-center gap-4 max-w-lg mx-auto
`;
