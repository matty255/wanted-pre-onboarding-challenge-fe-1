import React from "react";
/** @jsxImportSource @emotion/react */
import tw, { css, styled, theme } from "twin.macro";

interface ButtonProps {
  variant?: "primary" | "secondary";
  isSmall?: boolean;
}

export const Button = styled.button(({ variant, isSmall }: ButtonProps) => [
  tw`px-8 py-2 rounded focus:outline-none transform duration-75`,
  tw`hocus:(scale-105 text-yellow-400)`,

  variant === "primary" && tw`bg-black text-white border-black`,

  variant === "secondary" && [
    css`
      box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
    `,
    tw`border-2 border-yellow-600`,
  ],

  isSmall ? tw`text-sm` : tw`text-lg`,

  // The theme import can supply values from your tailwind.config.js
  css`
    color: ${theme`colors.white`};
  `,
]);
