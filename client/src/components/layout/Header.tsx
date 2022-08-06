import React from "react";
import tw from "tailwind-styled-components";
// import { ReactComponent as Logo } from "../../static/image/Logo.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { tokenState } from "../../store/global";

const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem("token", "");
    navigate("/sign", { replace: true });
  };
  return (
    <EngSkyHeader>
      <h1 className="text-3xl">.To Do list</h1>
      <button onClick={logout} className="text-lg tracking-tight">
        Logout
      </button>
    </EngSkyHeader>
  );
};

export default Header;

const EngSkyHeader = tw.header`
bg-amber-400 h-24 flex justify-between items-center px-10
border-b-4 border-amber-500
`;
