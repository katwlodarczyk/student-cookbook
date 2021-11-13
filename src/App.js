import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './viewes/Home';
import ShoppingList from './viewes/ShoppingList';
import WeeklyPlanner from './viewes/WeeklyPlanner';

const recipeCollection = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    time: "30 minutes",
    level: "Very easy",
    for: "4 people",
    image: "https://images.unsplash.com/photo-1590576502976-a7b6cd63f4dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",
    ingredients: ["200 gr spaghetti pasta", "500gr beef or pork mince", "5 fresh basil leaves", "pinch of salt", "pinch of pepper", "1 tbs oil", "1 can of tomatoes"],
    recipeSteps: [
      {
        id:1,
        data: "Do this.",
      },
      {
        id:2,
        data: "Do that.",
      },
      {
        id:3,
        data: "Do something else as well.",
      },
    ]
  },
  {
    id: 2,
    title: "Spaghetti Bolognese",
    time: "15 minutes",
    level: "Very easy",
    for: "4 people",
    image: "https://images.unsplash.com/photo-1590576502976-a7b6cd63f4dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",
    ingredients: ["200 gr spaghetti pasta", "500gr beef or pork mince", "5 fresh basil leaves", "pinch of salt", "pinch of pepper", "1 tbs oil", "1 can of tomatoes"],
    recipeSteps: [
      {
        id:1,
        data: "Do this.",
      },
      {
        id:2,
        data: "Do that.",
      },
      {
        id:3,
        data: "Do something else as well.",
      },
    ]
  },
  {
    id: 3,
    title: "Shpaghetti Carbonara",
    time: "30 minutes",
    level: "Very easy",
    for: "4 people",
    image: "https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",
    ingredients: ["200 gr spaghetti pasta", "500gr beef or pork mince", "5 fresh basil leaves", "pinch of salt", "pinch of pepper", "1 tbs oil", "1 can of tomatoes"],
    recipeSteps: [
      {
        id:1,
        data: "Do this.",
      },
      {
        id:2,
        data: "Do that.",
      },
      {
        id:3,
        data: "Do something else as well.",
      },
    ]
  },
];

const shoppingList = [
  {
    id: 1,
    name: '150g of spaghetti pasta',
    alreadyGot: false,
  },
  {
    id: 2,
    name: '500g of beef mince meat',
    alreadyGot: true,
  },
];

function App() {
  return (
    <div className="App font-koho">
      <Switch>
        <Route exact path="/">
          <Home recipeCollection={recipeCollection}/>
        </Route>
        <Route path="/shopping-list">
          <ShoppingList shoppingList={shoppingList}/>
        </Route>
        <Route path="/weekly-planner">
          <WeeklyPlanner />
        </Route>
        <Route path="/recipe">
          
        </Route>
        <Route path="*">
    
        </Route>
      </Switch>
    </div>
  );
}

export default App;
