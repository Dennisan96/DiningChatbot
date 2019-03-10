import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Amplify from 'aws-amplify';


Amplify.configure({
    Auth: {
		mandatorySignIn: true,
		region: 'us-east-1',
		userPoolId: 'us-east-1_D3g3rWBjh',
		identityPoolId: 'us-east-1:134aeb32-180f-4639-ba96-de3d63acfa36',
		userPoolWebClientId: '45o4pdcdfmo0gj9tmai1h3ohjp'
    }
})

ReactDOM.render(
	<Router>
		<App />
	</Router>, 
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
