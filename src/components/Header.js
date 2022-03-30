import React from 'react';
import {NavLink} from 'react-router-dom'
const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/about" activeClassName='thisReplaceActiveWithThisClass'>About</NavLink></li>
      <li><NavLink to="/teachers" activeStyle={{background:'tomato'}}>Teachers</NavLink></li>
      <li><NavLink to="/courses">Courses</NavLink></li>
    </ul>    
  </header>
);

export default Header;