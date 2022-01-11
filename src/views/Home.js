import Banner from "../components/Banner";
import RecipeCard from "../components/RecipeCard";
import TabBar from "../components/TabBar";
import { Link } from "react-router-dom";
import useAuth from "../services/useAuth";
import useRecipes from "../services/useRecipes";
import React, { useEffect, useState } from "react";

const Home = (props) => {
    const { user } = useAuth();
    const { getRecipes } = useRecipes();
    const [recipes, setRecipes] = useState([]);

    const getRecipesData = async () => {
      const recipesSnap = await getRecipes();
      let recipes = [];
      if (recipesSnap.size) {
        recipesSnap.forEach((doc) => {
          recipes.push({ ...doc.data(), ...{ id: doc.id } });
        });
        setRecipes(recipes);
      }
    };
  
    useEffect(() => {
      getRecipesData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <div className="w-full min-h-screen h-max">
        <Banner position="center" heading="Let's get cooking!"/>
        <div className="mb-25 p-4 flex flex-col space-y-5">
            <h1 className="text-xl -mb-4">Hello {user.displayName ? user.displayName : user.email},</h1>
            <p className="text-sm text-light">What you're going to cook today?</p>
            <div className="grid grid-cols-2 gap-3">
              {recipes.map( (recipe) => 
                <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
                <RecipeCard recipe={recipe}/>
              </Link>
              )}
            </div>
        </div>
        <TabBar/>
    </div>
  );
};

export default Home;