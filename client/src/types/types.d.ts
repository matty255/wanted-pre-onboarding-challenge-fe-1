import React from "react";
import { UserProps } from "./user";

declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.woff";
declare module "react-query";
declare module "react-query/devtools";

interface LayoutProps {
  children: React.ReactNode;
}

export { LayoutProps };
