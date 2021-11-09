import Banner from "../components/Banner";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import TabBar from "../components/TabBar";

const Home = (props) => {

    const {} = props;

  return (
    <div className="w-full h-screen">
        <Banner position="center" heading="Let's get cooking!"/>
        <div class="p-4 flex flex-col space-y-5">
            <SearchBar/>
            <div className="grid grid-cols-2 gap-3">
                <RecipeCard time='30 mins' title='Spaghetti Bolognese' image='https://images.unsplash.com/photo-1590576502976-a7b6cd63f4dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80'/>
                <RecipeCard time='30 mins' title='Spaghetti Bolognese' image='https://images.unsplash.com/photo-1590576502976-a7b6cd63f4dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80'/>
            </div>
        </div>
        <TabBar/>
    </div>
  );
};

export default Home;