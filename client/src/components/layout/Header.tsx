import React from "react";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { useNavigate } from "react-router-dom";
import { Text } from "../../common/Text";
import { Storage } from "../../api/storage";
import { useDark } from "../../hooks/useDark";
const Header = () => {
  const navigate = useNavigate();
  const token = Storage.has({ key: "token", persist: false });
  const logout = () => {
    Storage.set({ key: "token", persist: false, value: "" });
    navigate("/");
  };
  const { isDarkMode, toggle } = useDark();

  return (
    <YellowHeader>
      <Text variant="logo" tw="text-white">
        To Do <span className="hidden md:contents">List</span>
      </Text>
      <div className="">
        <button
          onClick={toggle}
          className="text-lg tracking-tight font-bold text-white mr-3"
        >
          darkMode
        </button>
        {token ? (
          <button
            onClick={logout}
            className="text-lg tracking-tight font-bold text-white"
          >
            Logout
          </button>
        ) : (
          <Text className="text-lg tracking-tight font-bold text-white">
            @matty255
          </Text>
        )}
      </div>
    </YellowHeader>
  );
};

export default Header;

const YellowHeader = tw.header`
bg-amber-300 h-20 flex justify-between items-center px-10 dark:bg-gray-700
`;
