import Banner from "../components/Banner";
import SearchBar from "../components/SearchBar";
import TabBar from "../components/TabBar";

const Home = (props) => {

    const {} = props;

  return (
    <div class="w-full h-screen">
        <Banner heading="Let's get cooking!"/>
        <div class="px-6 py-4">
            <SearchBar/>
        </div>
        <TabBar/>
    </div>
  );
};

export default Home;