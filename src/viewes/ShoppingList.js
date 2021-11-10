import Banner from "../components/Banner";
import TabBar from "../components/TabBar";
import shopingList from "../assets/images/shopping-list.jpg"
import emptyCart from "../assets/illustrations/empty-cart.svg"

const ShoppingList = (props) => {

    const {} = props;
    const bgImage = shopingList;
    const empty = emptyCart;

    const shoppingList = [];

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
          <div className="p-4 flex flex-col space-y-5">
              
          </div>
        }
        <TabBar/>
    </div>
  );
};

export default ShoppingList;