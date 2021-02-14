import './App.css';
import List from './components/List/List';
import Login from './components/Login/Login';
import AppContext from './context/appContext';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import React, { useContext } from 'react';


const App = () => {
  const appContext = useContext(AppContext); 
  const { user } = appContext; 
  
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route 
              exact path='/' 
              render={() => user === '' ? <Redirect to="/login"/> : <List />}
            />
            <Route
              exact path='/login'
              render={() => user !== '' ? <Redirect to='/'/> : <Login /> }
            />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
