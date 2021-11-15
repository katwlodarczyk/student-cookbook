import Banner from "../components/Banner";
import TabBar from "../components/TabBar";
import calendar from "../assets/images/calendar.jpg";
import weeklyPlanner from "../assets/illustrations/empty-calendar.svg";
import RecipeCardFluid from "../components/RecipeCardFluid";

const WeeklyPlanner = () => {

    const bgImage = calendar;
    const empty = weeklyPlanner;

    const planner = [
      {
        id: 1,
        date: 'Today',
        recipeId: 1,
      },
      {
        id: 2,
        date: 'Tomorrow',
        recipeId: 2,
      },
      {
        id: 2,
        date: 'Wednesday',
        recipeId: 2,
      },
      
    ]

  return (
    <div className="w-full min-h-screen h-max">
        <Banner center image={bgImage} position="top" heading="Weekly Planner"/>
        {planner.length === 0 && 
          <div className="mb-25 p-4 flex flex-col justify-center pt-32 items-center space-y-5 text-sm">
              <img src={empty} alt="empty calendar"></img>
              <p>Your weekly planner is empty.</p>
          </div>
        }
        {planner.length > 0 && 
          <div className="mb-25 p-4 pb-28">
            <div className="flex flex-col space-y-6">
              {planner.map( (item,index) => 
                <div className="flex flex-col space-y-4">
                <h2 className="text-lg">{item.date}</h2>
                <RecipeCardFluid key={index} recipe={item.recipeId}/> 
                </div>
              )}
            </div>
          </div>
        }
        <TabBar/>
    </div>
  );
};

export default WeeklyPlanner;