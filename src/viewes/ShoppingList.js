import Banner from "../components/Banner";
import TabBar from "../components/TabBar";

const ShoppingList = (props) => {

    const {} = props;

  return (
    <div className="w-full h-screen">
        <Banner center heading="Shopping list"/>
        <div className="p-4 flex flex-col space-y-5">
            
        </div>
        <TabBar/>
    </div>
  );
};

export default ShoppingList;