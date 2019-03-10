import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Login from './Login';
import Signup from './Signup';
import Home from './Home';


export default ({ childProps}) => (
    <Switch>
        <Route exact path='/'  component={Home} props={childProps} />
        <Route path='/login' component={Login} props={childProps} />
        <Route path='/signup' component={Signup} props={childProps} />
    </Switch>
);

