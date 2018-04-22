import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {createBrowserHistory} from 'history';

import Shell from './containers/Shell';
import {route as HomePageRoute} from './containers/HomePage';
import {route as NotFoundPageRoute} from './containers/NotFoundPage';

import configureStore from './configureStore';

const initialState = {};
const history = createBrowserHistory();
const store = configureStore(initialState, history);

const routes = [].concat(
    HomePageRoute,
    NotFoundPageRoute
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route render={props => <Shell {...props} routes={routes} />} />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);