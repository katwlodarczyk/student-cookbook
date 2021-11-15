import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './viewes/Home';
import ShoppingList from './viewes/ShoppingList';
import WeeklyPlanner from './viewes/WeeklyPlanner';
import Recipe from './viewes/Recipe';
import CookRecipe from './viewes/CookRecipe';
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
          <Route path={`/recipe/:recipeId`} element={<Recipe />}>
            <Route path={`step/:stepId`} element={<CookRecipe />} />
          </Route>
          <Route path="*" />
        </Routes>
    </div>
  );
}

export default App;
