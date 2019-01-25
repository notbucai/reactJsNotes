import React, { Component } from "react";

import store from './store';

// import * as action_types from "./store/action_types";
import { getTodoAddAction, getInputValueChangeAction, getTodoRemoveAction, sagaTodoListInitAction } from "./store/actionCreators";

import TodoListUI from "./TodoListUIView";

class TodoList extends Component {
  constructor(props) {
    super(props);
    const state = store.getState();
    // 这个时候 state 还没有初始化 不能调用 setState() ；
    this.state = state;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStateUpdate = this.handleStateUpdate.bind(this);
    this.handleBtnAddTodo = this.handleBtnAddTodo.bind(this);
    this.handleTodoItemRemove = this.handleTodoItemRemove.bind(this);
    store.subscribe(this.handleStateUpdate);
  }

  async componentDidMount() {

    const action = sagaTodoListInitAction();
    store.dispatch(action);

  }

  render() {

    const { inputValue, list } = this.state;
    const handleBtnAddTodo = this.handleBtnAddTodo;
    const handleInputChange = this.handleInputChange;
    const handleTodoItemRemove = this.handleTodoItemRemove;

    return (
      <TodoListUI
        list={list}
        inputValue={inputValue}
        handleBtnAddTodo={handleBtnAddTodo}
        handleInputChange={handleInputChange}
        handleTodoItemRemove={handleTodoItemRemove}
      />
    );
  }

  handleInputChange(e) {
    const action = getInputValueChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleBtnAddTodo() {
    const action = getTodoAddAction();
    store.dispatch(action);
  }

  handleTodoItemRemove(index) {
    const action = getTodoRemoveAction(index);
    store.dispatch(action);

  }

  handleStateUpdate() {
    const state = store.getState();
    this.setState(state);
  }

}

export default TodoList;