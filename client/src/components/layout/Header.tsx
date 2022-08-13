import React from "react";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { useNavigate } from "react-router-dom";
import { Text } from "../../common/Text";
import { Storage } from "../../api/storage";
const Header = () => {
  const navigate = useNavigate();
  const token = Storage.has({ key: "token", persist: false });
  const logout = () => {
    Storage.set({ key: "token", persist: false, value: "" });
    navigate("/");
  };

  return (
    <YellowHeader>
      <Text variant="logo" tw="text-white">
        To Do list
      </Text>
      {token ? (
        <button
          onClick={logout}
          className="text-lg tracking-tight font-bold text-white"
        >
          Logout
        </button>
      ) : (
        <Text>@matty255</Text>
      )}
    </YellowHeader>
  );
};

export default Header;

const YellowHeader = tw.header`
bg-amber-300 h-20 flex justify-between items-center px-10 
`;
