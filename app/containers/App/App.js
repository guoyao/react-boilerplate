/**
 * @file 顶层组件
 * @author guoyao
 */

import React from 'react';
import {Switch, Redirect} from 'react-router';
import {Link} from 'react-router-dom';

export default props => (
    <div>
        <h1>APP</h1>
        <Link to="/home">Home</Link>
        <Link to="/404">404 Page</Link>
        <div>
            <Switch>
                <Redirect path="/" exact to="/home" />
                {props.routes}
            </Switch>
        </div>
    </div>
);