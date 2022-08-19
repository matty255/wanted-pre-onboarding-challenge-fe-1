import React from "react";
/** @jsxImportSource @emotion/react */
import tw, { css, styled, theme } from "twin.macro";

type SpinnerType = {
  onClick?: () => void;
};

export const Spinner = (onClick: SpinnerType) => {
  return (
    <>
      <div className="fixed top-0 w-full h-screen z-50" onClick={() => onClick}>
        <div className="flex justify-center items-center fixed top-[45%] left-[45%] animate-spin text-9xl">
          🐧
        </div>
      </div>
    </>
  );
};

export default Spinner;
