import React from "react";
/** @jsxImportSource @emotion/react */
import tw, { css, styled, theme } from "twin.macro";

interface BoxProps {
  isSmall?: boolean;
}

export const Box = styled.div(({ isSmall }: BoxProps) => [
  tw`px-8 py-8 rounded focus:outline-none transform duration-75 max-w-2xl mx-auto shadow-lg bg-white bg-opacity-70`,
]);
