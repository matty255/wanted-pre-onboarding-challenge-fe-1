import React from "react";
/** @jsxImportSource @emotion/react */
import tw, { css, styled, theme } from "twin.macro";

interface ButtonProps {
  variant?: "primary" | "secondary";
  isSmall?: boolean;
}

export const Box = styled.div(({ variant, isSmall }: ButtonProps) => [
  tw`px-8 py-2 rounded focus:outline-none transform duration-75 max-w-2xl mx-auto`,
]);
