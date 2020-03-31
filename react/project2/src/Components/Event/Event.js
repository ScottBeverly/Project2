import React from 'react';
import './Event.css';

function Event(props) {
  


  
  console.log('event',props)
  return (
    <div>
        <h1>{props.data.title}</h1>
        <h2>{props.data.date}</h2>
        <p>{props.data.explanation}</p>
        <img src={props.data.url}/>
    </div>
  );
}

export default Event;