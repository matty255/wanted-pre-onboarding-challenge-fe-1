import React from "react";
/** @jsxImportSource @emotion/react */
import tw, { css, styled, theme } from "twin.macro";

export const Spinner = () => {
  return (
    <>
      <div className="fixed top-0 w-full h-screen z-50">
        <div className="flex justify-center items-center fixed top-1/2 left-1/2 animate-spin text-9xl">
          🐧
        </div>
      </div>
    </>
  );
};

export default Spinner;
