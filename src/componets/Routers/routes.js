import React from 'react';
import App from '../../pages/Browser';
import Series from '../../pages/Series'
import Movies from '../../pages/Movies'
import { Switch, Route } from 'react-router-dom';

export const Routes = () => {
    return(
        <Switch>
            <Route path="/browse" component={App} exact />
            <Route path="/series" component={Series} exact />
            <Route path="/movies" component={Movies} exact />
        </Switch>
    );
}