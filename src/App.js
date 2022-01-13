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
  const { isAuthenticated , createEmailUser, signInEmailUser } = useAuth();
  const componentMounted = useRef(true);
  const userUID = localStorage.getItem('userUID')
  
  useEffect(() => {
    if (componentMounted.current) {
      return;
    }
    return () => {
      componentMounted.current = false;
    }
  }, [])

  return (
    <div className="App font-koho">
        <Routes>
          <Route path='/login' element={<Login signInEmailUser={signInEmailUser} />} />
          <Route path='/register' element={<Register createEmailUser={createEmailUser}/>} />
          <Route  
            exact
            path="/" 
            element={userUID || isAuthenticated? <Home/> : <Navigate to="../login" replace />}
            />
          <Route 
            exact 
            path="/shopping-list" 
            element={userUID || isAuthenticated ? <ShoppingList/> : <Navigate to="../login" replace />}
          />
          <Route exact path="/weekly-planner"  element={userUID || isAuthenticated ? <WeeklyPlanner/> : <Navigate to="../login" replace />}/>
          <Route exact path="/profile"  element={userUID || isAuthenticated ? <Profile/> : <Navigate to="../login" replace />}/>
          <Route exact path={`/recipe/:recipeId`}  element={userUID || isAuthenticated ? <Recipe/> : <Navigate to="../login" replace />} />
          <Route exact path={`/recipe/:recipeId/step/:stepId`}  element={userUID || isAuthenticated ? <CookRecipe/> : <Navigate to="../login" replace />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    </div>
  );
}

export default App;