import React from 'react';
import { BrowserRouter,Route,Switch, NavLink, Redirect } from 'react-router-dom';

import CourseContainer from './courses/CourseContainer';
import {HTMLCourses, CSSCourses, JSCourses} from '../data/courses';
const Courses = (props) => (

  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to={`${props.match.url}/html`}>HTML</NavLink></li>
        <li><NavLink to={`${props.match.url}/css`}>CSS</NavLink></li>
        <li><NavLink to={`${props.match.url}/javascript`}>JavaScript</NavLink></li>
      </ul>
    </div>

    <Switch>
    <Route exact path={props.match.path}render={()=><Redirect to={`${props.match.path}/html`}/>} />
    <Route path={`${props.match.path}/html`}>
        <CourseContainer data={HTMLCourses} />
      </Route>
      <Route path={`${props.match.path}/css`} render={()=><CourseContainer data={CSSCourses} />} />
      <Route path={`${props.match.path}/javascript`} render={()=><CourseContainer data={JSCourses} />} />
      </Switch>
  </div>
      
      
);

export default Courses;