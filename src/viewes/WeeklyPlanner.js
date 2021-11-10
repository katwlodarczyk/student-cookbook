import Banner from "../components/Banner";
import TabBar from "../components/TabBar";
import calendar from "../assets/images/calendar.jpg";
import weeklyPlanner from "../assets/illustrations/empty-calendar.svg";

const WeeklyPlanner = (props) => {

    const {} = props;
    const bgImage = calendar;
    const empty = weeklyPlanner;

    const planner = []

  return (
    <div className="w-full h-screen">
        <Banner center image={bgImage} position="top" heading="Weekly Planner"/>
        {planner.length === 0 && 
          <div className="p-4 flex flex-col justify-center pt-32 items-center space-y-5 text-sm">
              <img src={empty} alt="empty calendar"></img>
              <p>Your weekly planner is empty.</p>
          </div>
        }
        {planner.length > 0 && 
          <div className="p-4 flex flex-col space-y-5">
              
          </div>
        }
        <TabBar/>
    </div>
  );
};

export default WeeklyPlanner;