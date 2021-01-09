import React from "react";
import Header from "./Header";

type Children = {
  children: JSX.Element[] | JSX.Element;
};

const Layout: React.FC<Children> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
