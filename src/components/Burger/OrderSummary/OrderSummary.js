import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  // This could be a functional component, doesn`t have a class
  componentWillUpdate() {
    console.log("[OrderSummary] WillUpdate");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "uppercase" }}>{igKey}</span>:
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3> Your Order </h3>
        <p> A delicious burger with the following ingredients: </p>
        <ul> {ingredientSummary} </ul>
        <p>
          <strong> Total Price: {this.props.price.toFixed(2)} </strong>
        </p>
        <Button btnType="Danger" clicked={this.props.purchaseCancle}>
          Cancle
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          Continue
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
