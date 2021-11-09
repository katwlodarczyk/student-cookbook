import Banner from "../components/Banner";
import TabBar from "../components/TabBar";
import calendar from "../assets/images/calendar.jpg";

const WeeklyPlanner = (props) => {

    const {} = props;
    const bgImage = calendar

  return (
    <div className="w-full h-screen">
        <Banner center image={bgImage} position="top" heading="Weekly Planner"/>
        <div className="p-4 flex flex-col space-y-5">
            
        </div>
        <TabBar/>
    </div>
  );
};

export default WeeklyPlanner;