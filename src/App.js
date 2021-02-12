import './App.css';
import List from './components/pages/List';
import Login from './components/pages/Login';
import AppContext from './context/appContext';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import React, { useContext } from 'react';


const App = () => {
  const appContext = useContext(AppContext); 
  const { user } = appContext; 

  const hello = [
    {value: 'dog', startEdit:false}, 
    {value: 'dog', startEdit:false}, 
    {value: 'cat', startEdit:false}, 
    {value: 'dog', startEdit:false}, 
    {value: 'dog', startEdit:false}, 
    {value: 'dog', startEdit:false}, 
    {value: 'cat', startEdit:false}, 
    {value: 'dog', startEdit:false}, 
    {value: 'dog', startEdit:false}, 
    {value: 'dog', startEdit:false}, 
    {value: 'cat', startEdit:false}, 
    {value: 'dog', startEdit:false}, 
    {value: 'cat', startEdit:false}, 
    {value: 'dog', startEdit:false}, 
    {value: 'dog', startEdit:false}, 
    {value: 'cat', startEdit:false}, 
    {value: 'dog', startEdit:false}, 
    {value: 'dog', startEdit:false}, 
    {value: 'doglonggarbagelonggarbage', startEdit:false}
  ]
  

  // const login = (user) => {
  //   setUser(user);
  //   localStorage.setItem(user, JSON.stringify(hello))
  // }

  // const logout = () => { 
  //   setUser('');
  // }

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
