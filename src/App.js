//  import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, } from 'react-router-dom'
 
import Home from './Components/Home'
import RestauranstList from './Components/RestauranstList'
import RestaurantCreate from './Components/RestaurantCreate'
import RestaurantDetail from './Components/RestaurantDetail'
import RestaurantSearch from './Components/RestaurantSearch'
import RestaurantUpdate from './Components/RestaurantUpdate'
import Protected from './Components/Protected';

import Login from './Components/Login'; 
import Logout from './Components/Logout'
import React, {  } from 'react';
 
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHome, faList, faPlus, faSearch, faDatabase, faUser } from '@fortawesome/free-solid-svg-icons'
// import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
// import { BrowserRouter as Link } from 'react-router-dom'
 
function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Router>
          <br />

          <Route path='/home'><Home /></Route>
          <Route path='/list'><RestauranstList /></Route>
          <Route path='/create'><RestaurantCreate /></Route>
          <Route  path='/detail'><RestaurantDetail /></Route>
          <Route path='/search'><RestaurantSearch /></Route>
          <Route path='/logout'><Logout/></Route>
          <Route path='/update/:id'
            render={props => (
              <RestaurantUpdate {...props} />
            )}
          >
     
          </Route>
          
           <Route path='/login'
            render={props => (
              <Login {...props} />
            )}
          >
          </Route> 
            <Protected exact path='/' component={Home}/> 
            <Protected exact path='/list' component={RestauranstList}/> 
            <Protected exact path='/create' component={RestaurantCreate}/> 
            <Protected exact path='/detail' component={RestaurantDetail}/> 
            <Protected exact path='/search' component={RestaurantSearch}/> 
            <Protected exact path='/update/:id' component={RestaurantUpdate}/> 

        </Router>
      </header>

    </div>
  );
}

export default App;
