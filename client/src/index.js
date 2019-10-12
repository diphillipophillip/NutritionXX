import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/index'
import Home from '../src/userComponents/Home'
import Login from '../src/userComponents/Login'
import Signup from '../src/userComponents/Signup'
import Dashboard from './Containers/Dashboard';


const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(

    <Router>
        <Provider store={store}>
            <App/>
            < Route exact path='/' component={Home} />
            < Route exact path='/login' component={Login} />
            < Route exact path='/signup' component={Signup} />
            < Route exact path='/dashboard' component={Dashboard} />
        </Provider>
    </Router>,
 document.getElementById('root'));


serviceWorker.unregister();

