import './App.css';
import React, { useEffect } from "react";
import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import Home from './views/Home';
import ShoppingList from './views/ShoppingList';
import WeeklyPlanner from './views/WeeklyPlanner';
import Recipe from './views/Recipe';
import CookRecipe from './views/CookRecipe';
import Login from './views/Login';
import Register from './views/Register';
import { getShoppingList, getRecipeCollection } from "./data.js";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebase";
import useAuth from "./services/useAuth";

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

function Protected({ authenticated, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
          <Navigate replace
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function App() {
  initializeApp(firebaseConfig);
  const { isAuthenticated, createEmailUser, signInEmailUser, signUserOut } = useAuth();
  useEffect(() => {
    if (isAuthenticated) {
      // history.push(history.location.state.from.pathname);
      return;
    }
    return;
  }, [isAuthenticated]);

  const location = useLocation();
  let shoppingList = getShoppingList();
  let recipeCollection = getRecipeCollection();

  return (
    <div className="App font-koho">
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route authenticated={isAuthenticated} exact path="/" element={<RequireAuth><Home recipeCollection={recipeCollection}/></RequireAuth>} />
          <Route authenticated={isAuthenticated} exact path="/shopping-list" element={<ShoppingList shoppingList={shoppingList}/>} />
          <Route authenticated={isAuthenticated} exact path="/weekly-planner" element={<WeeklyPlanner />} />
          <Route authenticated={isAuthenticated} exact path={`/recipe/:recipeId`} element={<Recipe />} />
          <Route authenticated={isAuthenticated} exact path={`/recipe/:recipeId/step/:stepId`} element={<CookRecipe />} />
          <Route path="*" element={<NoMatch />}/>
        </Routes>
    </div>
  );
}


export default App