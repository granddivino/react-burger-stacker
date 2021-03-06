import React, { useState } from "react";
import "./css/App.css";
import BurgerPane from "./components/BurgerPane";
import IngredientList from "./components/IngredientList";


const App = () => {

  const [ingredients] = useState([
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
  ]);


const [chosenIngredients, setChosenIngredients] = useState([]);


let addIngredient = (e, ingredients) => {
    e.preventDefault();
    setChosenIngredients([ingredients, ...chosenIngredients]);
};


let clearBurger = () => {
    setChosenIngredients([]);
};

  return (
    <div className="burger-body">
      <div className="ingredients">
        <IngredientList
          ingredients={ingredients}
          addIngredient={addIngredient}
        />
      </div>

      <div className="burger-stack">
        <BurgerPane
          chosenIngredients={chosenIngredients}
          clearBurger={clearBurger}
        />
      </div>
    </div>
  );
}

export default App;
