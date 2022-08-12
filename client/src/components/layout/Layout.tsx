import React from "react";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { LayoutProps } from "../../types/types";
import Header from "./Header";

const Layout = ({ children }: LayoutProps) => {
  return (
    <GlobalLayout>
      <Header />
      {children}
    </GlobalLayout>
  );
};

export default Layout;

const GlobalLayout = tw.div`
w-full h-screen mx-auto
`;
