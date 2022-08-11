import React from "react";
/** @jsxImportSource @emotion/react */
import tw, { styled, css, theme } from "twin.macro";

export const Input = styled.input`
  ${css`
    -webkit-tap-highlight-color: transparent; /* add css styles */
    background-color: ${theme`colors.green.200`}; /* add values from your tailwind config */
    width: 70vh;
    ${tw`text-blue-500 border-2`}; /* tailwind classes */

    &::selection {
      ${tw`text-purple-500`}; /* style custom css selectors with tailwind classes */
    }
  `}
`;
