import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import './AnimationGroup.css'
class Animation extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isShow: true,
      list: [
        "test", "123", "333", "sdf"
      ]
    };
  }
  render() {
    const { list, isShow } = this.state;
    return (
      <div className="app">
        <CSSTransition
          in={isShow} // 状态
          timeout={1000}  // 执行时间
          classNames="test" // classname 前缀
          unmountOnExit // 离场动画执行完毕 使节点在文档中消失 
          appear={true} // 添加一个 appear 类名
        /* 完整的类名写法 
        classNames={{
          appear: 'my-appear',
          appearActive: 'my-active-appear',
          enter: 'my-enter',
          enterActive: 'my-active-enter',
          enterDone: 'my-done-enter,
          exit: 'my-exit',
          exitActive: 'my-active-exit',
          exitDone: 'my-done-exit,
        }}
        */
        >
          <p className={isShow ? 'show' : 'hide'}>Hello World</p>
        </CSSTransition>
        <TransitionGroup>
          {list.map((item) =>
            (
              <CSSTransition
                key={item}
                classNames="test"
                appear={true} // 添加一个 appear 类名
              >
                <p>{item}</p>
              </CSSTransition>
            )
          )}
        </TransitionGroup>
        <button onClick={this.handleClick}>Test</button>
      </div>
    );
  }
  handleClick() {
    this.setState((prevState) => (
      {
        isShow: !prevState.isShow,
        list: [Math.random() * 1000 | 0, ...prevState.list]
      }
    ));
  }
}

export default Animation;