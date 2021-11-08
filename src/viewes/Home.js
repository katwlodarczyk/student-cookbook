import Banner from "../components/Banner";
import TabBar from "../components/TabBar";

const Home = (props) => {

    const {} = props;

  return (
    <div class="w-full h-full">
        <Banner heading="Let's get cooking!"/>
        <TabBar class="fixed bottom-0"/>
    </div>
  );
};

export default Home;