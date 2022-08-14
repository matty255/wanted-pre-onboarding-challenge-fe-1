import React from "react";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { LayoutProps } from "../../types/types";
import Header from "./Header";
import TopButton from "./TopButton";
const Layout = ({ children }: LayoutProps) => {
  return (
    <GlobalLayout>
      <Header />
      {children}
      <TopButton />
    </GlobalLayout>
  );
};

export default Layout;

const GlobalLayout = tw.div`
w-full mx-auto max-w-7xl
`;
