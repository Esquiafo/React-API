import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ListContainer from './container/ListContainer';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/countries' component={ListContainer} />
        </Switch>
    )
}
export default Routes
