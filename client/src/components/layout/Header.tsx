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
      헤더
      <button onClick={logout}>로그아웃</button>
    </EngSkyHeader>
  );
};

export default Header;

const EngSkyHeader = tw.header`
bg-sky-400 h-[5.063rem] flex items-end pl-[2rem] pb-[0.1rem]
`;
