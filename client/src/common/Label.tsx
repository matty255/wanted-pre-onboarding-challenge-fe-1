import React from "react";
/** @jsxImportSource @emotion/react */
import tw, { styled, css, theme } from "twin.macro";
import { Text } from "./Text";
import { useLocation } from "react-router-dom";

interface LabelProps {
  content: React.ReactNode;
  title: string;
  isError?: boolean;
  errorMessage?: string;
  isTextArea?: boolean;
}

const Label = (props: LabelProps) => {
  const { pathname } = useLocation();
  return (
    <>
      <div className={!props.isTextArea ? "h-24" : "h-[8.2rem]"}>
        <label>
          <Text variant="text" tw="dark:text-white dark:shadow-inner w-fit">
            {props.title}
          </Text>
        </label>
        <div>{props.content}</div>
        {props.isError && (
          <Text variant="error" tw="dark:text-yellow-700">
            {props.errorMessage}
          </Text>
        )}
      </div>
    </>
  );
};

export default Label;
