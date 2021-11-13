import Banner from "../components/Banner";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import TabBar from "../components/TabBar";
import PropTypes from "prop-types";

const Home = (props) => {

    const {recipeCollection} = props;

  return (
    <div className="w-full min-h-screen h-max">
        <Banner position="center" heading="Let's get cooking!"/>
        <div className="mb-25 p-4 flex flex-col space-y-5">
            <SearchBar/>
            <div className="grid grid-cols-2 gap-3">
              {recipeCollection.map( (recipe) => 
                <RecipeCard key={recipe.id} recipe={recipe}/>
              )}
            </div>
        </div>
        <TabBar/>
    </div>
  );
};

Home.propTypes = {
  recipeCollection: PropTypes.array
};

export default Home;