import React from "react";
import NavigationItems from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItems link="./" active>
      Burger Builder
    </NavigationItems>
    <NavigationItems link="./">Checkout</NavigationItems>
  </ul>
);

export default navigationItems;
