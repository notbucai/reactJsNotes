import React, { Component, Fragment } from "react";
import { GlobaStyle } from './style';
import { Provider } from 'react-redux';
import store from "./store";

import router from './router';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobaStyle />
          {router()}
        </Fragment>
      </Provider>
    );
  }
}

export default App;