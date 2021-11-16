import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menubar from './Components/Menubar/Menubar';
import Restaurent from './Components/Restaurent/Restaurent';
import Meal from './Components/Meal/Meal';
import Meaildetail from './Components/MealDeatil/Meaildetail';
import Notfound from './Components/Notfound/Notfound';
import Delete from './Components/Delete/Delete';

function App() {
  return (
    <div className="App" >
      <Router>
        <Menubar></Menubar>
        <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/restaurent">
            <Restaurent></Restaurent>
          </Route>
          {/* /meal/${idMeal}  "/friend/:friendID"*/}
          <Route path="/meal/:searchId">
            <Meaildetail></Meaildetail>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
