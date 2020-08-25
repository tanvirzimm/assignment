import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
    <Router>
     
    <Header></Header>
     <Switch>
       <Route exact path='/'>
       <Home></Home>
       </Route>
       <Route path='/login'>
       <Login></Login>
       </Route>
     </Switch>
    
    
     
     </Router>
    </div>
  );
}

export default App;
