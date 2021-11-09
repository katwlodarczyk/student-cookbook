import Banner from "../components/Banner";
import TabBar from "../components/TabBar";
import shopingList from "../assets/images/shopping-list.jpg"

const ShoppingList = (props) => {

    const {} = props;
    const bgImage = shopingList

  return (
    <div className="w-full h-screen">
        <Banner center image={bgImage} position="center" heading="Shopping list" className="bg-cover"/>
        <div className="p-4 flex flex-col space-y-5">
            
        </div>
        <TabBar/>
    </div>
  );
};

export default ShoppingList;