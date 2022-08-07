import React from "react";
import tw from "tailwind-styled-components";
// import { ReactComponent as Logo } from "../../static/image/Logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const token = !!localStorage.getItem("token")?.valueOf();

  const logout = () => {
    localStorage.setItem("token", "");
    navigate("/sign", { replace: true });
  };
  return (
    <EngSkyHeader>
      <h1 className="text-3xl">.To Do list</h1>
      {token ? (
        <button onClick={logout} className="text-lg tracking-tight">
          Logout
        </button>
      ) : (
        <button>login</button>
      )}
    </EngSkyHeader>
  );
};

export default Header;

const EngSkyHeader = tw.header`
bg-amber-400 h-24 flex justify-between items-center px-10
border-b-4 border-amber-500
`;
