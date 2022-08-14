import React from "react";
/** @jsxImportSource @emotion/react */
import tw, { css, styled, theme } from "twin.macro";

interface ButtonProps {
  variant?: "primary" | "secondary";
  isSmall?: boolean;
}

export const Button = styled.button(({ variant, isSmall }: ButtonProps) => [
  tw`px-8 py-2 rounded focus:outline-none transform duration-75`,
  tw`hocus:(scale-105) disabled:(scale-100)`,

  variant === "primary" && tw`bg-amber-600 text-white border-black`,

  variant === "secondary" && [
    css`
      box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
    `,
    tw`ml-3 bg-orange-200`,
  ],

  isSmall ? tw`text-sm bg-yellow-400 dark:bg-gray-900` : tw`text-lg`,

  // The theme import can supply values from your tailwind.config.js
  css`
    color: ${theme`colors.white`};
  `,
]);
