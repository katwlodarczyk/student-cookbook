import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getRecipe, deleteFromPlanner } from "../data";

RecipeCardFluid.propTypes = {
    recipe: PropTypes.number,
};

function RecipeCardFluid(props) {
    const {recipeId} = props;
    let recipe = getRecipe(parseInt(recipeId, 10));

    const [showMenu, setShowMenu] = useState(false);

    const removeRecipe = () => {
        deleteFromPlanner(recipeId)
    }

    const displayMenu = e => {
        setShowMenu(!showMenu);
      };

    return (
        <div className="relative w-full h-34 text-white text-xxxs shadow-lg rounded-lg flex" style={{ background: `url(${recipe.image})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }} no-repeat="true"> 
            <div className="absolute w-full h-full bg-overlay rounded-lg"></div>
            <div className="z-20 w-full h-full p-2 flex flex-row items-end justify-between">
                <div className="text-base pb-1">
                    { recipe.title }
                </div>
                <div className="relative inline-block text-left">
                    <svg onClick={displayMenu} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M26.2471 19.0228C27.1687 19.0228 27.9137 19.7678 27.9137 20.6895C27.9137 21.6112 27.1687 22.3562 26.2471 22.3562C25.3254 22.3562 24.5721 21.6112 24.5721 20.6895C24.5721 19.7678 25.3104 19.0228 26.2304 19.0228H26.2471ZM19.5642 19.0228C20.4859 19.0228 21.2309 19.7678 21.2309 20.6895C21.2309 21.6112 20.4859 22.3562 19.5642 22.3562C18.6426 22.3562 17.8909 21.6112 17.8909 20.6895C17.8909 19.7678 18.6276 19.0228 19.5492 19.0228H19.5642ZM12.8829 19.0228C13.8046 19.0228 14.5496 19.7678 14.5496 20.6895C14.5496 21.6112 13.8046 22.3562 12.8829 22.3562C11.9612 22.3562 11.2079 21.6112 11.2079 20.6895C11.2079 19.7678 11.9462 19.0228 12.8679 19.0228H12.8829Z" fill="white"/>
                    </svg>
        
                    {showMenu && (
                        <div className="z-40 origin-top-right absolute right-0 w-40 rounded-md shadow-lg bg-white focus:outline-none">
                            <div className="py-1">
                                <Link to={`recipe/${recipe.id}`} className="text-gray-700 block px-4 py-2 text-xs" id="0">Open recipe</Link>
                                <Link to={`recipe/${recipe.id}`} className="text-gray-700 block px-4 py-2 text-xs" id="1">Move day</Link>
                                <p onClick={removeRecipe} className="text-red-500 block px-4 py-2 text-xs" id="2">Remove from my week</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
  }

export default RecipeCardFluid;