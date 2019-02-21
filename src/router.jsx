import { BrowserRouter, Route } from 'react-router-dom';
import React, { Fragment } from 'react';

import Header from './common/header'

import Home from './routes/home'
import Detail from './routes/detail'
import Test from './routes/test'
import Login from './routes/login';
import User from './routes/user';

export default () => {
  return (
    // 必须 用router 包裹才能 实用link 
    <BrowserRouter>
      <Fragment>
        <Header />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/test" component={Test}></Route>
        <Route exact path="/p/:id" component={Detail}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/u/:id" component={User}></Route>
      </Fragment>
    </BrowserRouter>
  )
};
