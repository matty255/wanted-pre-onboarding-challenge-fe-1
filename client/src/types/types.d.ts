import React from "react";
import { ScheduleList } from "../../types/schedule";

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
