import { BrowserRouter, Route } from 'react-router-dom';
import React, { Fragment } from 'react';

import Header from './common/header'

import Home from './routes/home'
import Test from './routes/test'


export default () => (
  // 必须 用router 包裹才能 实用link 
  <BrowserRouter>
    <Fragment>
      <Header />
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/test" component={Test}></Route>
    </Fragment>
  </BrowserRouter>
);
