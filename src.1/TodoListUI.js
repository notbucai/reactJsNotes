import React, { Component } from "react";

import store from './store';

import { connect } from 'react-redux';

// import * as action_types from "./store/action_types";
import { getTodoAddAction, getInputValueChangeAction, getTodoRemoveAction, sagaTodoListInitAction } from "./store/actionCreators";

import TodoListUI from "./TodoListUIView";

class TodoList extends Component {
  // constructor(props) {
  //   super(props);
  //   const state = store.getState();
  //   // 这个时候 state 还没有初始化 不能调用 setState() ；
  //   this.state = state;
  //   this.handleInputChange = this.handleInputChange.bind(this);
  //   this.handleStateUpdate = this.handleStateUpdate.bind(this);
  //   this.handleBtnAddTodo = this.handleBtnAddTodo.bind(this);
  //   this.handleTodoItemRemove = this.handleTodoItemRemove.bind(this);
  //   store.subscribe(this.handleStateUpdate);
  // }

  async componentDidMount() {

    this.props.componentDidMount();

  }

  render() {

    const { inputValue, list,handleBtnAddTodo,handleInputChange,handleTodoItemRemove } = this.props;

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

  // handleInputChange(e) {
  //   const action = getInputValueChangeAction(e.target.value);
  //   store.dispatch(action);
  // }

  // handleBtnAddTodo() {
  //   const action = getTodoAddAction();
  //   store.dispatch(action);
  // }

  // handleTodoItemRemove(index) {
  //   const action = getTodoRemoveAction(index);
  //   store.dispatch(action);

  // }

  // handleStateUpdate() {
  //   const state = store.getState();
  //   this.setState(state);
  // }

}

const mapStateToProps = (state) => {
  const { inputValue, list } = state;

  return {
    inputValue: inputValue,
    list: list
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    handleInputChange(e) {
      const action = getInputValueChangeAction(e.target.value);
      dispatch(action);
    },

    handleBtnAddTodo() {
      const action = getTodoAddAction();
      dispatch(action);
    },

    handleTodoItemRemove(index) {
      const action = getTodoRemoveAction(index);
      dispatch(action);

    },
    componentDidMount() {
      const action = sagaTodoListInitAction();
      store.dispatch(action);
    }
    // handleStateUpdate() {
    //   const state = store.getState();
    //   this.setState(state);
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);