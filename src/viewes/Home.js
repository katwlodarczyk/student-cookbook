import Banner from "../components/Banner";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import TabBar from "../components/TabBar";

const Home = (props) => {

    const {recipeCollection} = props;

  return (
    <div className="w-full h-screen">
        <Banner position="center" heading="Let's get cooking!"/>
        <div class="p-4 flex flex-col space-y-5">
            <SearchBar/>
            <div className="grid grid-cols-2 gap-3">
              {recipeCollection.map( (recipe) => 
                <RecipeCard key={recipe.id} time={recipe.time} title={recipe.title} image={recipe.image}/>
              )}
            </div>
        </div>
        <TabBar/>
    </div>
  );
};

export default Home;