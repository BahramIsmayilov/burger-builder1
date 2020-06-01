import React, { Component } from "react";
import classes from "./BurgerIngredient.module.css";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={classes.BreadBotton}></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case "meet":
        ingredient = <div className="Meet"></div>;
        break;
      case "cheese":
        ingredient = <div className="Cheese"></div>;
        break;
      case "salad":
        ingredient = <div className="Salad"></div>;
        break;
      case "bacon":
        ingredient = <div className="Bacon"></div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

export default BurgerIngredient;
