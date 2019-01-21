import React, { Component } from "react";

class TodoItem extends Component {
  constructor(porps) {
    super(porps);
    // 提前绑定this 只需要绑定一次 每次执行再绑定的话每次都要绑定
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  render() {
    return (
      <li dangerouslySetInnerHTML={{ __html: this.props.content }} onClick={this.handleItemDelete}></li>
    );
  }
  handleItemDelete() {
    // console.log(this.props.index);
    const { handleItemDelete, index } = this.props;

    handleItemDelete(index);
  }

}

export default TodoItem;