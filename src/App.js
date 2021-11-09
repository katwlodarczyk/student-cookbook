import './App.css';
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Home from './viewes/Home';
import ShoppingList from './viewes/ShoppingList';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shopping-list">
          <ShoppingList />
        </Route>
        <Route path="/planner">
          
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
