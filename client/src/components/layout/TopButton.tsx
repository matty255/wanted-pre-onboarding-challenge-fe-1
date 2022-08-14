import React from "react";
import { useDark } from "../../hooks/useDark";

const TopButton = () => {
  const { toggle } = useDark();
  const moveToTop = () =>
    document.documentElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  return (
    <>
      <div className="fixed bottom-5 right-5">
        <div className="bg-gray-500 p-1 text-white divide-x text-center w-32">
          <button onClick={toggle} className="w-1/2 hover:bg-gray-300">
            dark
          </button>

          <button onClick={moveToTop} className="w-1/2 hover:bg-gray-300">
            top
          </button>
        </div>
      </div>
    </>
  );
};

export default TopButton;
