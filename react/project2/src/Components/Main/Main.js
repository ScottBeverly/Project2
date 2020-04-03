import React from 'react';
import Home from '../Home/Home'
import Dash from '../Dash/Dash'
import {Route, Switch} from 'react-router-dom'




function Main() {
  return (
    <div>
      <Switch>
        <Route exact path = '/'  component={Home}/>
        <Route path='/Dash'render={props => <Dash/>}/>
      </Switch>
    </div>
  );
}

export default Main;