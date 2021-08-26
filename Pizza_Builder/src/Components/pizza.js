import "./pizza.css";

import React, { Component } from "react";

export default class pizza extends Component {
  state = {
    greenpeppers: 0,
    cheese: 0,
    mushroom: 0,
    olive: 0,
    sausage: 0,
    tomato: 0,
  };
  pizzaContent = () => {
    let { greenpeppers, cheese, mushroom, olive, sausage, tomato } = this.state;
    let pizza = [];
    for (let i = 0; i < greenpeppers; i++) {
      pizza.push(
        <div key={pizza.length} className="greenpepper ingredients"></div>
      );
      console.log(pizza);
    }
    // outputting the tomato
    for (let i = 0; i < tomato; i++) {
      pizza.push(<div key={pizza.length} className="tomato ingredients"></div>);
    }
    // outputting the cheese
    for (let i = 0; i < cheese; i++) {
      pizza.push(<div key={pizza.length} className="cheese ingredients"></div>);
    }
    // outputting the meat
    for (let i = 0; i < mushroom; i++) {
      pizza.push(
        <div key={pizza.length} className="mushroom ingredients"></div>
      );
    }
    for (let i = 0; i < sausage; i++) {
      pizza.push(
        <div key={pizza.length} className="sausage ingredients"></div>
      );
    }
    for (let i = 0; i < olive; i++) {
      pizza.push(<div key={pizza.length} className="olive ingredients"></div>);
    }
    // if(pizza.length === 0)
    //     pizza.push(<p key="0">Please start adding ingredients!</p>);
    return pizza;
  };
  addRemoveIngredient = (action, Ingredient) => {
    let { greenpeppers, cheese, mushroom, olive, sausage, tomato } = this.state;
    let statevalue;
    if (Ingredient == "greenpeppers") {
      statevalue = greenpeppers;
    } else if (Ingredient == "cheese") {
      statevalue = cheese;
    } else if (Ingredient == "olive") {
      statevalue = olive;
    } else if (Ingredient == "sausage") {
      statevalue = sausage;
    } else if (Ingredient == "mushroom") {
      statevalue = mushroom;
    } else if (Ingredient == "tomato") {
      statevalue = tomato;
    }
    if (action === "add") {
      statevalue = statevalue + 1;
    } else {
      statevalue = statevalue - 1;
    }
    this.setState({
      [Ingredient]: statevalue >= 0 ? statevalue : 0, //if statevalue >=0 then update with state else put it to 0
    });
  };

  render() {
    return (
      <>
         <header> 🍕Pizza Maker🍕</header>
        <div className="pizzaIngredients">
          <div className="base"></div>
          {this.pizzaContent()}
        </div>
        <div className="ingredientsBlock">
          <p>GreenPeppers</p>
          <div className="ingrBtns">
            <button
              className="ingrBtn"
              onClick={() => this.addRemoveIngredient("add", "greenpeppers")}
            >
              Add
            </button>
            <button
              className="ingrBtn"
              onClick={() => this.addRemoveIngredient("remove", "greenpeppers")}
            >
              Remove
            </button>
          </div>
          <p>TOMATO</p>
          <div className="ingrBtns">
            <button
              className="ingrBtn"
              onClick={() => this.addRemoveIngredient("add", "tomato")}
            >
              Add
            </button>
            <button
              className="ingrBtn"
              onClick={() => this.addRemoveIngredient("remove", "tomato")}
            >
              Remove
            </button>
          </div>
          <p>CHEESE</p>
          <div className="ingrBtns">
            <button
              className="ingrBtn"
              onClick={() => this.addRemoveIngredient("add", "cheese")}
            >
              Add
            </button>
            <button
              className="ingrBtn"
              onClick={() => this.addRemoveIngredient("remove", "cheese")}
            >
              Remove
            </button>
          </div>
          <p>Mushroom</p>
          <div className="ingrBtns">
            <button
              className="ingrBtn"
              onClick={() => this.addRemoveIngredient("add", "mushroom")}
            >
              Add
            </button>
            <button
              className="ingrBtn"
              onClick={() => this.addRemoveIngredient("remove", "mushroom")}
            >
              Remove
            </button>
          </div>
          <p>Olive</p>
          <div className="ingrBtns">
            <button
              className="ingrBtn"
              onClick={() => this.addRemoveIngredient("add", "olive")}
            >
              Add
            </button>
            <button
              className="ingrBtn"
              onClick={() => this.addRemoveIngredient("remove", "olive")}
            >
              Remove
            </button>
          </div>
        </div>
      </>
    );
  }
}
