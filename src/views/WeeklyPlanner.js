import Banner from "../components/Banner";
import TabBar from "../components/TabBar";
import calendar from "../assets/images/calendar.jpg";
import weeklyPlanner from "../assets/illustrations/empty-calendar.svg";
import RecipeCardFluid from "../components/RecipeCardFluid";
import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import useRecipeFunctionality from "../services/useRecipeFunctionality";
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import _ from "underscore";
import { doc, setDoc, deleteDoc, getFirestore } from "firebase/firestore";

const WeeklyPlanner = () => {
    const db = getFirestore();
    const userUID = localStorage.getItem('userUID');
    const { getWeeklyPlanner } = useRecipeFunctionality();
    const bgImage = calendar;
    const empty = weeklyPlanner;
    const [loading, setLoading] = useState(true);
    const [planner, setPlanner] = useState({});
    const [groupedPlanner, setGroupedPlanner] = useState([]);
    const [arrayPlanner, setArrayPlanner] = useState([]);

    const formattedToday = DateTime.now().toLocaleString(DateTime.DATE_HUGE)
    const tomorrow = DateTime.now().plus({days: 1})
    const formattedTomorrow = tomorrow.toLocaleString(DateTime.DATE_HUGE)

    function weekDayFormatting(item) {
      const formattedDate = DateTime.fromISO(item).toLocaleString(DateTime.DATE_HUGE)
      if (formattedDate === formattedToday) {
        return "Today"
      } else if (formattedDate === formattedTomorrow ){
        return "Tomorrow"
      } else {
        return formattedDate
      }
    }

    // function groupByDay(groupedPlanner) { 
    //   console.log('groupedPLanner', groupedPlanner)
      
    //   _.mapObject(groupedPlanner,  function(val, key) {
    //     console.log('key,val', key, val)
    //     const date = key
    //     let it;
    //     const mappedValues = val.map((item) => {
    //       return item
    //     })

      
    //     return <div key={date} className="flex flex-col space-y-4">
    //               <h2 className="text-lg">{ weekDayFormatting(date) }</h2>
    //               <RecipeCardFluid key={it.recipe.id} recipe={it.recipe}/> 
    //             </div>
    //   })
    // };

    const getWeeklyPlannerData = async () => {
      const listSnap = await getWeeklyPlanner(userUID);
      let planner = [];
      if (listSnap.size) {
        listSnap.forEach((doc) => {
          planner.push({ ...doc.data(), ...{ id: doc.id } });
        });
        setPlanner(planner);
        setGroupedPlanner(_.groupBy(planner, 'date'))
        setLoading(false)
      }
      else {
        setLoading(false)
      }
    };

    useEffect(() => {
      getWeeklyPlannerData(userUID);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [planner]); 

    const handleClickDelete = (userId, id) => {
      setLoading(true)
      setPlanner(planner.filter(item => item.id !== id))
      deleteDoc(doc(db, `weekly-planner-${userId}`, id));
      setLoading(false)
    }

    const confirmDelete = (id) => {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='font-koho mx-8 flex flex-col bg-gray-50 text-gray-900 px-6 py-4 rounded-sm'>
              <h1 className="flex flex-row space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-red-400 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
                <span>
                  Are you sure?
                </span>
              </h1>
              <p className="text-sm">Recipe will be removed from your weekly planner.</p>
              <div className="flex flex-row justify-between mt-5">
                <button onClick={onClose}>Cancel</button>
                <button className="bg-red-500 text-white py-1 px-3 rounded-sm"
                  onClick={() => {
                    handleClickDelete(userUID, id);
                    onClose();
                  }}
                >
                  Yes, Remove it!
                </button>
              </div>
            </div>
          );
        }
      });
    };

    const addToWeeklyPlanner = async (date, recipeName, recipe) => {
      const add = {
          ...{date: date, recipe}}
      const recipeRef = doc(db,`weekly-planner-${userUID}`, `${date}-${recipeName}`)

      try {
          await setDoc(recipeRef, add, {merge:true});
          NotificationManager.success('Recipe has been added to your planner.', 'Success!', 2000)
      } catch (e) {
          NotificationManager.error('Oops, something went wrong. Try again!', 'Error!', 2000)
        console.log(e);
      }
  };

    const handleClickMove = (id, recipeName, date, recipe) => {
      setLoading(true)
      setPlanner(planner.filter(item => item.id !== id))
      deleteDoc(doc(db, `weekly-planner-${userUID}`, id))
      addToWeeklyPlanner(date, recipeName, recipe)
      setLoading(false)
    }

    const confirmMove = (id, recipeName, date, recipe) => {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='font-koho mx-8 flex flex-col bg-gray-50 text-gray-900 px-6 py-4 rounded-sm'>
              <h1 className="flex flex-row space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-red-400 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
                <span>
                  Are you sure?
                </span>
              </h1>
              <p className="text-sm">Recipe will be moved to the selected date.</p>
              <div className="flex flex-row justify-between mt-5">
                <button onClick={onClose}>Cancel</button>
                <button className="bg-red-500 text-white py-1 px-3 rounded-sm"
                  onClick={() => {
                    handleClickMove(id, recipeName, date, recipe);
                    onClose();
                  }}
                >
                  Yes, Move it!
                </button>
              </div>
            </div>
          );
        }
      });
    };

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
              {planner.map( (item) => 
                  <div key={item.id} className="flex flex-col space-y-4">
                    <h2 className="text-lg">{ weekDayFormatting(item.date) }</h2>
                      <RecipeCardFluid key={`${item.date}-${item.recipe.name}`} id={`${item.date}-${item.recipe.name}`} recipe={item.recipe} onMove={confirmMove} onDelete={confirmDelete}/> 
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