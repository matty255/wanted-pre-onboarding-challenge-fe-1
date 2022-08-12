import React from "react";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Text } from "../../common/Text";
const Header = () => {
  const navigate = useNavigate();
  const token = !!localStorage.getItem("token")?.valueOf();
  const logout = () => {
    localStorage.setItem("token", "");
    navigate("/");
  };

  return (
    <YellowHeader>
      <Text variant="logo">To Do list</Text>
      {token ? (
        <button onClick={logout} className="text-lg tracking-tight">
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
