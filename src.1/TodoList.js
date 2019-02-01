import React, { Component, Fragment } from 'react';
import './app.css'

import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    // 当 state 或 porps 发生改变 render就会 重新渲染
    this.state = {
      inputVal: "neirun",
      list: ["123"]
    }
    // 统一绑定this
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleItemAdd = this.handleItemAdd.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.showTodoList = this.showTodoList.bind(this);
  }
  /* 一些生命周期 */

  componentWillMount(){
    // 组件被挂载到页面之前
    console.log("componentWillMount");
    
  }

  componentDidMount(){
    // 组件被挂载到页面之后
    console.log("componentDidMount");
  }
  
  componentWillReceiveProps(){
    // 当 props 被改变 这个组件为顶层组件 所以 不会执行 请看 TodoItem 组件
    console.log("componentWillReceiveProps");
    
  }

  shouldComponentUpdate(){
    // 组件被更新之前
    console.log("shouldComponentUpdate");
    // 需要返回一个值 返回true 表示 我要更新这个组件 flase 表示不更新这个组件
    return true;
    
  }

  componentWillUpdate(){
    // 组件被更新之前且 shouldComponentUpdate 返回true 才会执行
    console.log("componentWillUpdate");
    
  }

  componentDidUpdate(){
    // 组件被更新之后
    console.log("componentDidUpdate");
    
  }

  componentWillUnmount(){
    // 当组件即将从页面中消失 
    console.log("componentWillUnmount");
    
  }

  render() {
    // 组件渲染 需要返回 虚拟dom
    console.log("render");
    
    return (
      <Fragment>
        {/* class 会和类关键词 冲突 所以 使用className 并非不能用 只是 不推荐 */}
        <div className="App">
          {/* 我是多行注释 */}
          {
            // 单行注释
          }
          {/* for 需要替换成 htmlFor */}
          <label htmlFor="content">聚焦</label>

          <input
            type="text"
            name="content"
            id="content"
            onChange={this.handleInput}
            value={this.state.inputVal}
            ref={(input) => { this.input = input }}
          />

          <button onClick={this.handleItemAdd}>提交</button>
        </div>
        <ul>
          {this.showTodoList()}

        </ul>
        
      </Fragment>
    );
  }

  showTodoList() {
    return this.state.list.map((item, index) => {
      // dangerouslySetInnerHTML 危险的 html 传递一个对象 {_html:text}
      // onClick={this.on.bind(this, 'remove', index)} 不能直接再 自定义组件上 直接绑定事件
      // key的重要性
      return <TodoItem key={item} content={item} index={index} handleItemDelete={this.handleItemDelete} />;
      // return (<li key={index} onClick={this.on.bind(this, 'remove', index)} dangerouslySetInnerHTML={{ __html: item }}></li>);
    })
  }

  handleItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    // delete this.state.list[index];  //不支持
    // 老版 这个
    // this.setState({
    //   list: list
    // });
    // 新版
    // 传递一个 函数 返回一个 对象 该函数最终为异步函数
    this.setState(() => ({ list: list }), () => {
      console.log("handleItemDelete -> setState 执行完毕");
    });
  }

  handleItemAdd() {
    if (this.state.inputVal) {
      // this.setState({
      //   ,
      //   
      // });
      // 由于是异步执行 所以state 可能会出现 线程安全 （具体名词忘了，，，） 然后 传递函数有个参数 prevStart 表示之前的数据
      this.setState((prevStart) => ({
        list: [prevStart.inputVal, ...prevStart.list],
        inputVal: ""
      }));
    }
  }

  handleInput() {
    // console.log(e);
    const { value } = this.input;
    // 由于代码是异步执行的 所有 e.target.value 可能已经不存在了
    this.setState(() => ({ inputVal: value }));
  }

}

export default TodoList;
