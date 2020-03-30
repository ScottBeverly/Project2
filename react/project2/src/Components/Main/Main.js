import React, {useState, useEffect} from 'react';
import Home from '../Home/Home'
import Event from '../Event/Event'
import Dash from '../Dash/Dash'
import {Route, Switch} from 'react-router-dom'




function Main() {
  const [day,setDay] = useState('2015-04-25')
  const nasaUrl = `https://api.nasa.gov/planetary/apod?&date=${day}&api_key=5922S8UNUwz5xhymJjtNTL4fBJwyhnqeeUEZYotx`
  const [data,setData] = useState([])
  
  
useEffect(()=>{
  const makeApiCall = async () => {
    const res = await fetch(nasaUrl);
    const json = await res.json();
    console.log('nasaURL',nasaUrl)
    setData(json)  
   
    console.log('first',json)
};
makeApiCall();
}, []);
// HANDLESUBMIT TO UPDATE NASA URL WITH SET DAY. 

const handleSubmit = (e) => {
  e.preventDefault();
  setDay(day)
}

// google how to update a string with a submit and form function. 

  return (
    <div>
      <Switch>
        <Route exact path= '/'  component={Home}/>
        <Route 
        path='/Dash'
        render={props => <Dash {...props} data={data} handleSubmit={handleSubmit}/>}
      />
       <Route 
        path='/Event'
        render={props => <Event {...props} data={data} />}
      />
        
      </Switch>
    </div>
  );
}

export default Main;