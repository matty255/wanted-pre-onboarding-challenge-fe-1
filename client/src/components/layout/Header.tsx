import React from "react";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { tokenState } from "../../store/global";

const Header = () => {
  const navigate = useNavigate();
  const token = !!localStorage.getItem("token")?.valueOf();
  const [tokens, setTokens] = useRecoilState(tokenState);
  const logout = () => {
    localStorage.setItem("token", "");
    setTokens("");
    navigate("/");
  };

  return (
    <YellowHeader
      className="bg-amber-400 h-24 flex justify-between items-center px-10
    border-b-4 border-amber-500"
    >
      <h1 className="text-3xl">.To Do list</h1>
      {token ? (
        <button onClick={logout} className="text-lg tracking-tight">
          Logout
        </button>
      ) : (
        <button>login</button>
      )}
    </YellowHeader>
  );
};

export default Header;

const YellowHeader = tw.header`
bg-amber-400 h-24 flex justify-between items-center px-10
    border-b-4 border-amber-500
`;
