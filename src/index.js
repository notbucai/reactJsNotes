import React from 'react';
import ReactDOM from 'react-dom';
// import Animation from './Animation';
// import Animation from './AnimationGroup';
import TodoListUI from './TodoListUI';

import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TodoListUI />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// PWA 本地项目储存
// serviceWorker.unregister();
