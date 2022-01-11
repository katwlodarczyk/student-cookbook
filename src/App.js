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

function App() {
  initializeApp(firebaseConfig);
  const { isAuthenticated, createEmailUser, signInEmailUser } = useAuth();
  const componentMounted = useRef(true);
  
  useEffect(() => {
    if (componentMounted.current && isAuthenticated === true) {
      <Navigate replace to="/" />
      return;
    }
    return () => {
      componentMounted.current = false;
    }
  }, [isAuthenticated])

  return (
    <div className="App font-koho">
        <Routes>
          <Route path='/login' element={<Login signInEmailUser={signInEmailUser} />} />
          <Route path='/register' element={<Register createEmailUser={createEmailUser}/>} />
          <Route  
            exact
            path="/" 
            element={isAuthenticated ? <Home/> : <Navigate to="../login" replace />}
            />
          <Route 
            exact 
            path="/shopping-list" 
            element={isAuthenticated ? <ShoppingList/> : <Navigate to="../login" replace />}
          />
          <Route exact path="/weekly-planner"  element={isAuthenticated ? <WeeklyPlanner/> : <Navigate to="../login" replace />}/>
          <Route exact path="/profile"  element={isAuthenticated ? <Profile/> : <Navigate to="../login" replace />}/>
          <Route exact path={`/recipe/:recipeId`}  element={isAuthenticated ? <Recipe/> : <Navigate to="../login" replace />} />
          <Route exact path={`/recipe/:recipeId/step/:stepId`}  element={isAuthenticated ? <CookRecipe/> : <Navigate to="../login" replace />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    </div>
  );
}

export default App;