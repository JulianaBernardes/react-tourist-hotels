import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from './components/Home/Home'
import HotelList from './components/HotelList/index'
import About from './components/About/About'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/hotelList' component={HotelList} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/' />
    </Switch>