import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './views/Home';
import ShoppingList from './views/ShoppingList';
import WeeklyPlanner from './views/WeeklyPlanner';
import Recipe from './views/Recipe';
import CookRecipe from './views/CookRecipe';
import { getShoppingList, getRecipeCollection } from "./data.js";

function App() {
  let shoppingList = getShoppingList();
  let recipeCollection = getRecipeCollection();

  return (
    <div className="App font-koho">
        <Routes>
          <Route exact path="/" element={<Home recipeCollection={recipeCollection}/>} />
          <Route path="/shopping-list" element={<ShoppingList shoppingList={shoppingList}/>} />
          <Route path="/weekly-planner" element={<WeeklyPlanner />} />
          <Route path={`/recipe/:recipeId`} element={<Recipe />} />
          <Route path={`/recipe/:recipeId/step/:stepId`} element={<CookRecipe />} />
          <Route path="*" />
        </Routes>
    </div>
  );
}

export default App;
