import '../../css/About.css'
import React from 'react';

const About = (props) => {
  return (
    <section>
      <h1 className='about-style'>This is my about page</h1>
      <h2>I am studying in {props.college}</h2>
      <h2>I'm currently in my pre-final year.</h2>
    </section>
  );
};

export default About;
