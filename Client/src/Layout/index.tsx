import React from "react";
import Header from "./Header";
import SideDrawer from "./SideDrawer";
import Tab from "./Tab";
import ShareDialog from "./ShareDialog";
import { withTheme as WithTheme } from "./Theme";

import { Paper } from "@material-ui/core";

type Children = {
  children: JSX.Element[] | JSX.Element;
};

const Layout: React.FC<Children> = ({ children }) => {
  return (
    <>
      <Paper>
        <Header />
        <SideDrawer />
        {children}
        <ShareDialog />
        <Tab />
      </Paper>
    </>
  );
};

export default WithTheme(Layout);
