import React, { Fragment } from "react";

import { Input, Button, List } from 'antd';
import './TodoListUI.css';



// 无状态组件 如果 只有render 函数 就可以认为是一个无状态组件
const TodoListUI = props => {

  const {
    inputValue,
    list,
    handleBtnAddTodo,
    handleInputChange,
    handleTodoItemRemove
  } = props;

  const itemShow = item => (
    <List.Item
      onClick={() => { handleTodoItemRemove(item._id) }}
      key={item._id}
    >{item.value}</List.Item>
  );

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
            renderItem={itemShow}
          >
          </List>
        </div>

      </div>
    </Fragment>
  );

};


export default TodoListUI;