import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Booking  from '../containers/Appointment/Booking'
import Home from '../containers/Home/home'
import PopUp from '../components/Modal'
import Test from '../containers/Appointment/TestApi'


const listStyle = {
  listStyleType: 'none',
  textDecoration: 'none',
  color: 'black',
  padding: '1%'
}

const NavBar = props => {
    return (
      <Router>
      <Links/>
      <Switch>   
        <Route exact path='/' component={Home}  />  
        <Route path='/Booking' component={Booking} />
        <Route path='/Test' component={Test} />
      </Switch> 
      </Router>
    );
};

const Links = () => {
  return (
      <div> 
      <div>
          <ul className="nav-links d-flex justify-content-end">
              <Link style={listStyle} to="/"><li >HOME</li></Link>
              <Link style={listStyle} to="/Booking"><li >BOOKING</li></Link> 
              <Link style={listStyle} to="/Test"><li >TEST</li></Link> 
              <PopUp name="SignUp"/> 
              <PopUp name="LogIn"/>       
          </ul>
      </div>
      </div>
    );
  };

export default NavBar;