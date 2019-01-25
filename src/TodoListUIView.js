import React, { Fragment } from "react";

import { Input, Button, List } from 'antd';
import './TodoListUI.css';

// 无状态组件 如果 只有render 函数 就可以认为是一个无状态组件
const TodoListUI = props => {

  const { inputValue, list } = props;
  const handleBtnAddTodo = props.handleBtnAddTodo;
  const handleInputChange = props.handleInputChange;
  const handleTodoItemRemove = props.handleTodoItemRemove;

  return (
    <Fragment>
      <div className="TodoList">

        <div className="Header">
          <Input placeholder="按钮" value={inputValue} onChange={handleInputChange} />
          <Button onClick={handleBtnAddTodo}>提 交</Button>
        </div>

        <div className="Main">
          <List
            bordered
            dataSource={list}
            renderItem={(item) => (<List.Item onClick={() => { handleTodoItemRemove(item._id) }} key={item._id}>{item.value}</List.Item>)}
          >
          </List>
        </div>

      </div>
    </Fragment>
  );
};


export default TodoListUI;