import React from "react";
/** @jsxImportSource @emotion/react */
import tw, { styled, css, theme } from "twin.macro";
import { Text } from "./Text";

interface HiddenBoxProps {
  children: React.ReactNode;
  close?: boolean;
  still?: boolean;
}

export const HiddenBox = styled.div(
  ({ children, close, still }: HiddenBoxProps) => [
    tw`flex flex-col mx-auto items-start justify-center p-10 sticky top-0 bg-amber-300 z-50 transition ease-in-out duration-150 dark:bg-gray-700 dark:shadow-lg`,
    close === true && tw`-translate-y-[88%]`,
  ]
);
