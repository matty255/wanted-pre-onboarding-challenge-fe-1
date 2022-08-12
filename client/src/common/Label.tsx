import React from "react";
/** @jsxImportSource @emotion/react */
import tw, { styled, css, theme } from "twin.macro";

interface LabelProps {
  content: React.ReactNode;
  title: string;
  isError: boolean;
  errorMessage: string;
}

const Label = (props: LabelProps) => {
  return (
    <>
      <div className="h-24">
        <label>{props.title}</label>
        <div>{props.content}</div>
        {props.isError && <p className="text-red-500">{props.errorMessage}</p>}
      </div>
    </>
  );
};

export default Label;
