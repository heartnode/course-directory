import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Header from './Header';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';
const App = () => (
  <BrowserRouter basename="/course-directory">
<div className="container">
  <Header />
  <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" render={()=><About title="About Page"/>} />
  <Route exact path="/teachers">
    <Teachers />
  </Route>
  <Route path="/teachers/:topic/:fname-:lname" component={Featured} />
  <Route path="/teachers/:topic/:fname/:lname?" component={Featured} /> 
  <Route path="/courses" component={Courses} />
  <Route component={NotFound} />
  </Switch>
  </div>
  </BrowserRouter>
);

export default App;