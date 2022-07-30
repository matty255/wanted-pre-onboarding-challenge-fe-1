import React from "react";
import { LayoutProps } from "../../types/types";
import tw from "tailwind-styled-components";

const Layout = ({ children }: LayoutProps) => {
  return <GlobalLayout>{children}</GlobalLayout>;
};

export default Layout;

const GlobalLayout = tw.div`
bg-gray-100 w-full h-auto min-h-screen
`;
