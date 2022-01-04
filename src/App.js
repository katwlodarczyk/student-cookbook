import './App.css';
import React, { useEffect, useRef } from "react";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import Home from './views/Home';
import ShoppingList from './views/ShoppingList';
import WeeklyPlanner from './views/WeeklyPlanner';
import Recipe from './views/Recipe';
import CookRecipe from './views/CookRecipe';
import Login from './views/Login';
import Register from './views/Register';
import Profile from './views/Profile';
import { getShoppingList, getRecipeCollection } from "./data.js";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebase";
import useAuth from "./services/useAuth";

function RequireAuth({ children }) {
  let isAuthenticated = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  initializeApp(firebaseConfig);
  const { isAuthenticated, createEmailUser, signInEmailUser } = useAuth();
  const componentMounted = useRef(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (componentMounted.current && isAuthenticated) {
      navigate('../', { replace: true })
      return;
    }
    return () => {
      componentMounted.current = false;
    }
  }, [isAuthenticated])

  const location = useLocation();
  let shoppingList = getShoppingList();
  let recipeCollection = getRecipeCollection();

  return (
    <div className="App font-koho">
        <Routes>
          <Route path='/login' element={<Login signInEmailUser={signInEmailUser} />} />
          <Route path='/register' element={<Register createEmailUser={createEmailUser}/>} />
          <Route 
            exact 
            path="/" 
            element={
            <RequireAuth>
              <Home recipeCollection={recipeCollection}/>
            </RequireAuth>
            } 
            />
          <Route 
          authenticated={isAuthenticated} 
          exact 
          path="/shopping-list" 
          element={
          <RequireAuth>
            <ShoppingList shoppingList={shoppingList}/>
          </RequireAuth>
            }
          />
          <Route authenticated={isAuthenticated} exact path="/weekly-planner" element={<WeeklyPlanner />} />
          <Route authenticated={isAuthenticated} exact path="/profile" element={<Profile />} />
          <Route authenticated={isAuthenticated} exact path={`/recipe/:recipeId`} element={<Recipe />} />
          <Route authenticated={isAuthenticated} exact path={`/recipe/:recipeId/step/:stepId`} element={<CookRecipe />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    </div>
  );
}


export default App;