import Banner from "../components/Banner";
import TabBar from "../components/TabBar";
import shopingListImage from "../assets/images/shopping-list.jpg"
import emptyCart from "../assets/illustrations/empty-cart.svg"
import Checkbox from "../components/Checkbox.js";

const ShoppingList = (props) => {
    const bgImage = shopingListImage;
    const empty = emptyCart;
    const {shoppingList} = props;
  

  return (
    <div className="w-full font-nunito h-screen">
        <Banner center image={bgImage} position="center" heading="Shopping list" className="bg-cover"/>
        {shoppingList.length === 0 && 
          <div className="p-4 flex flex-col justify-center pt-32 items-center space-y-5 text-sm">
              <img src={empty} alt="empty cart"></img>
              <p>Your shopping list is empty.</p>
          </div>
        }
        {shoppingList.length > 0 && 
          <div className="py-4 flex flex-col space-y-5">
              <div className="px-4 flex flex-col space-y-2">
                <h2 className="text-lg">To Buy:</h2>
                <div className="flex flex-col space-y-2">
                  {shoppingList.map( (item) => 
                  <Checkbox label={item.name}></Checkbox>
                  )}
                </div>
              </div>
              <div className="p-4 bg-gray-100 flex flex-col space-y-2">
                <h2 className="text-lg">Already got:</h2>
                <div className="flex flex-col space-y-2">
                  {shoppingList.map( (item) => 
                  <Checkbox key={item.id} label={item.name} alreadyGot></Checkbox>
                  )}
                </div>
              </div>
          </div>
        }
        <TabBar/>
    </div>
  );
};

export default ShoppingList;