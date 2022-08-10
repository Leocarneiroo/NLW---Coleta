import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './Pages/Home';
import CreatePoint from './Pages/CreatePoint';
import { Component } from 'react';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/"/>
        </BrowserRouter>
    );
}

export default Routes;