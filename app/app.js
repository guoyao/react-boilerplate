import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import {createBrowserHistory} from 'history';

import App from './containers/App';
import {route as HomePageRoute} from './containers/HomePage';
import {route as Page1Route} from './containers/Page1';
import {route as NotFoundPageRoute} from './containers/NotFoundPage';

import './assets/images/favicon.ico';

const history = createBrowserHistory();
const routes = [].concat(
    HomePageRoute,
    Page1Route,
    NotFoundPageRoute
);

ReactDOM.render(
    <Router history={history}>
        <Route render={props => <App {...props} routes={routes} />} />
    </Router>,
    document.getElementById('app')
);