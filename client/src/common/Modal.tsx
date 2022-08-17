import React from "react";
/** @jsxImportSource @emotion/react */
import tw, { css, styled, theme } from "twin.macro";

import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText?: string;
  contentText?: string;
  callback?: () => void;
}

export const Modal: React.FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
  callback,
  contentText = "삭제",
}) => {
  const Modal = (
    <React.Fragment>
      <Backdrop onClick={() => hide()} />
      <Wrapper>
        <StyledModal>
          <Content>
            {modalContent}
            <div className="flex flex-row divide-x ">
              <button
                className="bg-white  mx-auto flex items-center justify-center font-bold text-center w-44 max-w-md"
                onClick={callback}
              >
                {contentText}
              </button>
              <button
                onClick={hide}
                className="bg-white  mx-auto flex items-center justify-center font-bold text-center w-44 max-w-md"
              >
                취소
              </button>
            </div>
          </Content>
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
  h-full overflow-hidden
  outline-none  px-10
`;

export const Backdrop = tw.div`
  fixed bg-slate-200 opacity-50
  w-full h-full
  top-0 left-0
  z-50 
`;

export const StyledModal = tw.div`
  z-50  relative mx-auto rounded-md bg-white md:bg-transparent
  w-full max-w-[58.9rem] h-fit top-0 bottom-3 overflow-hidden
`;

export const Header = tw.div`
flex justify-between p-1 bg-red-300
`;

export const HeaderText = tw.div`
text-start md:text-center mx-auto w-full cursor-pointer p-2 text-lg tracking-wider text-gray-700
`;

export const CloseButton = tw.button`
rounded-sm cursor-pointer mr-2
`;

export const Content = tw.div`
  overflow-y-auto w-full bg-white flex flex-col items-center overflow-hidden
  h-[80%] min-h-max max-w-sm mx-auto border border-yellow-400 rounded-md 
`;

export const HotelData = tw.div`
bg-white
`;

export const Button = tw.button`

`;
