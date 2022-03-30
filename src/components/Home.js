import React, { Component } from 'react';
import {Link} from 'react-router-dom';
/*
Accessing the History Object
Depending on how your application is set up, you might need to import withRouter into your component in order to access the history object’s properties.
*/
class Home extends Component {    
  handleSubmit = (e)=>{
    e.preventDefault();
    const name = this.name.value;
    const topic = this.topic.value;
    this.props.history.push(`/teachers/${topic}/${name}/`);
  }

  render() {
    return (
      <div className="main-content home">
        <h2>Front End Course Directory</h2>
        <p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
        <p>Learn front end web development and much more! This simple directory app offers a preview of our course library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the skills you need to launch a new career in front end web development.</p>
        <p>We have thousands of videos created by expert teachers on web design and front end development. Our library is continually refreshed with the latest on web technology so you will never fall behind.</p>
        <hr />
        <h3>Featured Teachers</h3>
        <Link to="/teachers/HTML/Emily-He">Emily He</Link>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name (e.g.emily/he)" ref={(input)=>this.name = input} />
          <input type="text" placeholder="Topic (e.g. html)" ref={(input)=>this.topic=input} />
          <button type="submit">Go</button>
        </form>
      </div>
    );
  }
}

export default Home;