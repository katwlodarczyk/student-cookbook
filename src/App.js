import './App.css';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './views/Home';
import ShoppingList from './views/ShoppingList';
import WeeklyPlanner from './views/WeeklyPlanner';
import Recipe from './views/Recipe';
import CookRecipe from './views/CookRecipe';
import Login from './views/Login';
import { getShoppingList, getRecipeCollection } from "./data.js";

export default function App() {
  let shoppingList = getShoppingList();
  let recipeCollection = getRecipeCollection();

  return (
    <div className="App font-koho">
        <Routes>
          <Route exact path="/" element={<Home recipeCollection={recipeCollection}/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="/shopping-list" element={<ShoppingList shoppingList={shoppingList}/>} />
          <Route path="/weekly-planner" element={<WeeklyPlanner />} />
          <Route path={`/recipe/:recipeId`} element={<Recipe />} />
          <Route path={`/recipe/:recipeId/step/:stepId`} element={<CookRecipe />} />
          <Route path="*" element={<NoMatch />}/>
        </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
