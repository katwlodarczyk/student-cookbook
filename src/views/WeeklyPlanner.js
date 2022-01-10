import Banner from "../components/Banner";
import TabBar from "../components/TabBar";
import calendar from "../assets/images/calendar.jpg";
import weeklyPlanner from "../assets/illustrations/empty-calendar.svg";
import RecipeCardFluid from "../components/RecipeCardFluid";
import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {
    doc,
    getDoc,
   getFirestore,
   setDoc
  } from "firebase/firestore";
import useRecipeFunctionality from "../services/useRecipeFunctionality";

const WeeklyPlanner = () => {
    const userUID = localStorage.getItem('userUID');
    const { getWeeklyPlanner } = useRecipeFunctionality();
    const bgImage = calendar;
    const empty = weeklyPlanner;
    const [loading, setLoading] = useState(true);
    const [planner, setPlanner] = useState({});

    const formattedToday = DateTime.now().toLocaleString(DateTime.DATE_HUGE)
    const tomorrow = DateTime.now().plus({days: 1})
    const formattedTomorrow = tomorrow.toLocaleString(DateTime.DATE_HUGE)

    function weekDayFormatting(item) {
      if (item === formattedToday) {
        return "Today"
      } else if (item === formattedTomorrow ){
        return "Tomorrow"
      } else {
        return item
      }
    }

    function groupByDay(planner) {
      console.log(planner)
    
    }

    const getWeeklyPlannerData = async () => {
      const listSnap = await getWeeklyPlanner(userUID);
      let planner = [];
      if (listSnap.size) {
        listSnap.forEach((doc) => {
          planner.push({ ...doc.data(), ...{ id: doc.id } });
        });
        setPlanner(planner);
        setLoading(false)
      }
      else {
        setLoading(false)
      }
    };

    useEffect(() => {
      getWeeklyPlannerData(userUID);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);  

  return (
    <div className="w-full min-h-screen h-max">
        <Banner center image={bgImage} position="top" heading="Weekly Planner"/>
        { loading && (<div className="p-4 text-lg">Loading...</div>)}
        {!loading && planner.length === 0 && 
          <div className="mb-25 p-4 flex flex-col justify-center pt-32 items-center space-y-5 text-sm">
              <img src={empty} alt="empty calendar"></img>
              <p>Your weekly planner is empty.</p>
          </div>
        }
        {!loading && planner.length > 0 && 
          <div className="mb-25 p-4 pb-28">
            <div className="flex flex-col space-y-6">
              {groupByDay(planner)}
              {planner.map( (item) => 
                <div key={item.recipe.id} className="flex flex-col space-y-4">
                  <h2 className="text-lg">{ weekDayFormatting(item.date) }</h2>
                  <RecipeCardFluid key={item.recipe.id} recipe={item.recipe}/> 
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