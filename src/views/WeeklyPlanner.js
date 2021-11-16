import Banner from "../components/Banner";
import TabBar from "../components/TabBar";
import calendar from "../assets/images/calendar.jpg";
import weeklyPlanner from "../assets/illustrations/empty-calendar.svg";
import RecipeCardFluid from "../components/RecipeCardFluid";
import { getPlanner } from "../data";
import { DateTime } from "luxon";

const WeeklyPlanner = () => {

    const bgImage = calendar;
    const empty = weeklyPlanner;
    let planner = getPlanner();
    const formattedToday = DateTime.now().toFormat('cccc, dd/LL/yyyy')
    const tomorrow = DateTime.now().plus({days: 1})
    const formattedTomorrow = tomorrow.toFormat('cccc, dd/LL/yyyy')

    function weekDayFormatting(item) {
      const formatedItem = DateTime.fromISO(item).toFormat('cccc, dd/LL/yyyy')
      if (formatedItem === formattedToday) {
        return "Today"
      } else if (formatedItem === formattedTomorrow ){
        return "Tomorrow"
      } else {
        return formatedItem
      }
    }

    function groupByDay(planner) {
      console.log(planner)
    
    }

  
  

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
              {groupByDay(planner)}
              {planner.map( (item) => 
                <div className="flex flex-col space-y-4">
                <h2 className="text-lg">{ weekDayFormatting(item.date) }</h2>
                <RecipeCardFluid key={item.id} recipeId={item.recipeId}/> 
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