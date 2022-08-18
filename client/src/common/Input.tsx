import React from "react";
/** @jsxImportSource @emotion/react */
import tw, { styled, css, theme } from "twin.macro";

interface InputProps {
  variant?: "validate" | "submit" | "edit";
}

export const Input = styled.input(({ variant }: InputProps) => [
  tw`text-xl font-semibold h-10 outline-none text-gray-800 pl-2 placeholder:italic placeholder:text-slate-400 `,
  variant === "validate" && tw`text-lg font-semibold h-10 outline-none w-full`,
  variant === "submit" && tw`text-lg font-semibold w-full md:w-3/4`,
  variant === "edit" && tw`text-base font-thin text-gray-400`,
]);

export const TextArea = styled.textarea(({ variant }: InputProps) => [
  tw`text-xl font-semibold outline-none text-gray-800 pl-2 placeholder:italic placeholder:text-slate-400 resize-none`,
  variant === "validate" && tw`text-lg font-semibold h-10 outline-none w-full`,
  variant === "submit" && tw`text-lg font-semibold w-full md:w-3/4`,
  variant === "edit" && tw`text-base font-thin text-gray-400`,
]);
