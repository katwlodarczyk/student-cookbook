import './App.css';
import React, { useEffect, useRef } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from './views/Home';
import ShoppingList from './views/ShoppingList';
import WeeklyPlanner from './views/WeeklyPlanner';
import Recipe from './views/Recipe';
import CookRecipe from './views/CookRecipe';
import Login from './views/Login';
import Register from './views/Register';
import Profile from './views/Profile';
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebase";
import useAuth from "./services/useAuth";

function RequireAuth({ children }) {
  let isAuthenticated = useAuth();
  return isAuthenticated === true ? children : <Navigate to="/login" />;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

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
                <Home/>
              </RequireAuth>
            } 
            />
          <Route 
            exact 
            path="/shopping-list" 
            element={
              <RequireAuth>
                <ShoppingList/>
              </RequireAuth>
            }
          />
          <Route exact path="/weekly-planner" element={<RequireAuth><WeeklyPlanner /></RequireAuth>} />
          <Route exact path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
          <Route exact path={`/recipe/:recipeId`} element={<RequireAuth><Recipe /></RequireAuth>} />
          <Route exact path={`/recipe/:recipeId/step/:stepId`} element={<RequireAuth><CookRecipe /></RequireAuth>} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    </div>
  );
}


export default App;