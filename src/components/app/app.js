import React from 'react';
import {MainPage, CartPage,DetailPage} from '../pages';
import AppHeader from '../app-header';
import { Route, Switch } from 'react-router-dom';
import "./style.css"

import Background from './food-bg.jpg';

const App = () => {
    return (
        <div className="app bacg">
            <AppHeader total={0}/>
            <Switch>
                <Route path = '/' exact component = {MainPage}/>
                <Route path = '/cart' exact component = {CartPage}/>
                <Route path = '/details' exact component = {DetailPage}/>
                {/*<Route path = '/:id' component ={ItemPage}/> */}
            </Switch>
        </div>
    )
}

export default App