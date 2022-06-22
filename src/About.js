import React from 'react';
import { useParams } from 'react-router-dom'


const About = () => {
  const {name} = useParams();
  return (
    <div className='App'>
      <h1>Bye {name}</h1>
    </div>
  );
}
export default About;
