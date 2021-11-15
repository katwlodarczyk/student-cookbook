import Banner from "../components/Banner";
import TabBar from "../components/TabBar";
import shopingListImage from "../assets/images/shopping-list.jpg"
import emptyCart from "../assets/illustrations/empty-cart.svg"
import Checkbox from "../components/Checkbox.js";
import PropTypes from "prop-types";

const ShoppingList = (props) => {
    const bgImage = shopingListImage;
    const empty = emptyCart;
    const {shoppingList} = props;
  

  return (
    <div className="w-full font-nunito min-h-screen h-max">
        <Banner center image={bgImage} position="center" heading="Shopping list" className="bg-cover"/>
        {shoppingList.length === 0 && 
          <div className="mb-25 p-4 flex flex-col justify-center pt-32 items-center space-y-5 text-sm">
              <img src={empty} alt="empty cart"></img>
              <p>Your shopping list is empty.</p>
          </div>
        }
        {shoppingList.length > 0 && 
          <div className="mb-25 p-4 pb-12 h-full flex flex-col  space-y-5 divide-y divide-dashed divide-gray-300">
              <div className="min-h-max flex flex-col space-y-2 pb-2">
                <h2 className="text-lg">To Buy:</h2>
                <div className="flex flex-col space-y-2">
                  {shoppingList.map( (item) => 
                  !item.alreadyGot ? <Checkbox key={item.id} label={item.name}></Checkbox> : ''
                  )}
                </div>
              </div>
              <div className="pt-4 flex flex-col space-y-2">
                <h2 className="text-lg">Already got:</h2>
                <div className="flex flex-col space-y-2">
                  {shoppingList.map( (item) => 
                  item.alreadyGot ? <Checkbox key={item.id} label={item.name} alreadyGot></Checkbox> : ''
                  )}
                </div>
              </div>
          </div>
        }
        <TabBar/>
    </div>
  );
};

ShoppingList.propTypes = {
  shoppingList: PropTypes.array
};

export default ShoppingList;