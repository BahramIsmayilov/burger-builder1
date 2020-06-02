import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state={...}
  // }

  state = {
    ingredients: {
      cheese: 2,
      meat: 2,
      salad: 1,
      bacon: 1,
    },
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>name: Mehman brom</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
