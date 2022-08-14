import React from "react";
/** @jsxImportSource @emotion/react */
import tw, { css, styled, theme } from "twin.macro";

interface TextProps {
  variant?: "logo" | "title" | "text" | "error";
}

export const Text = styled.p(({ variant }: TextProps) => [
  tw`text-xl font-semibold`,
  variant === "logo" && tw`text-4xl font-bold`,
  variant === "title" && tw`text-lg md:text-2xl font-bold mb-3`,
  variant === "text" && tw`text-base md:text-lg font-semibold text-gray-700`,
  variant === "error" && tw`text-base font-thin text-gray-400`,
]);
