import React from 'react';
import Home from '../Home/Home'
import Event from '../Event/Event'
import Dash from '../Dash/Dash'
import {Route, Switch} from 'react-router-dom'

const nasaUrl = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?status=open"



function Main() {

  const makeApiCall = async () => {
    const res = await fetch(nasaUrl);
    const json = await res.json();
    console.log(json)
   
  }
  makeApiCall();
  return (
    <div>
      <Switch>
        <Home exact path='/'/>
        <Dash />
        <Event />
      </Switch>
    </div>
  );
}

export default Main;