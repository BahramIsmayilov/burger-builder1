import React from "react";
// import Aux from "../../hoc/Aux";
import classes from "./Layout.css";

const Layout = (props) => {
  return (
    <>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </>
  );
};

export default Layout;
