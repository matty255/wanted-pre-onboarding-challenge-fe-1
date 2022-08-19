import React from "react";
/** @jsxImportSource @emotion/react */
import tw, { css, styled, theme } from "twin.macro";

export const Skeleton = () => {
  return (
    <>
      <div className="flex shadow-md bg-white mb-10 h-44 flex-col md:flex-row dark:bg-gray-700 dark:text-white animate-pulse">
        <div className="animate-pulse">
          <div className="w-3/5 bg-gray-300 dark:bg-gray-400 h-10 m-5 mt-6 opacity-70"></div>
          <div className="w-2/5 bg-gray-300 dark:bg-gray-400 h-7 ml-5 -mt-1 opacity-60"></div>
          <div className="w-2/5 bg-gray-300 dark:bg-gray-400 h-7 ml-5 mt-3 opacity-60"></div>
        </div>
        <div className="absolute right-10 animate-pulse md:relative md:left-[90%] lg:left-[93%] md:bottom-[84%]">
          <div className="w-14 bg-gray-300 dark:bg-gray-400 h-10 mr-5 mt-5 opacity-70"></div>
          <div className="w-14 bg-gray-300 dark:bg-gray-400 h-10 mr-5 mt-2 opacity-70"></div>
          <div className="w-14 bg-gray-300 dark:bg-gray-400 h-10 mr-5 mt-2 opacity-70"></div>
        </div>
      </div>
    </>
  );
};

export default Skeleton;
