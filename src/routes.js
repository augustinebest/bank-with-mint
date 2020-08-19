import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/home';

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Home} exact {...props} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;