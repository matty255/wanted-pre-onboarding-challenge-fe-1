import React from "react";
/** @jsxImportSource @emotion/react */
import tw, { styled, css, theme } from "twin.macro";
import { Text } from "./Text";

interface LabelProps {
  content: React.ReactNode;
  title: string;
  isError?: boolean;
  errorMessage?: string;
}

const Label = (props: LabelProps) => {
  return (
    <>
      <div className="h-24">
        <label>
          <Text variant="text">{props.title}</Text>
        </label>
        <div>{props.content}</div>
        {props.isError && <Text variant="error">{props.errorMessage}</Text>}
      </div>
    </>
  );
};

export default Label;
