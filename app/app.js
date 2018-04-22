import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import {createBrowserHistory} from 'history';

import Shell from './containers/Shell';
import {route as HomePageRoute} from './containers/HomePage';
import {route as NotFoundPageRoute} from './containers/NotFoundPage';

const history = createBrowserHistory();
const routes = [].concat(
    HomePageRoute,
    NotFoundPageRoute
);

ReactDOM.render(
    <Router history={history}>
        <Route render={props => <Shell {...props} routes={routes} />} />
    </Router>,
    document.getElementById('app')
);