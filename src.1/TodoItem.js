import React, { Component } from "react";
import PropTypes from "prop-types";


class TodoItem extends Component {

  static propTypes = {
    test: PropTypes.string,
    content: PropTypes.string.isRequired,// 必须传递 且为 字符串
    index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // 多个类型 中的其中一个
    handleItemDelete: PropTypes.func
  }
  static defaultProps = {
    index: -1,
    test: "test"
  }


  componentWillReceiveProps() {
    // 当 props 被改变 
    // x 只要 父组件被 rander 被执行 且有参数传递
    // 1 从父组件中接受参数
    // 2 当第一次存在于父组件 不执行 
    // 3 当之前就存在于父组件中 才执行
    console.log("TodoItem -> componentWillReceiveProps");

  }

  componentWillUnmount() {
    // 当组件即将从页面中消失 
    console.log("TodoItem -> componentWillUnmount");

  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    
    if (this.props.content === nextProps.content) {
      return false;
    }
    return false;
  }

  constructor(props) {
    super(props);
    // 提前绑定this 只需要绑定一次 每次执行再绑定的话每次都要绑定
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  render() {
    return (
      <li dangerouslySetInnerHTML={{ __html: this.props.test + this.props.content }} onClick={this.handleItemDelete}></li>
    );
  }
  handleItemDelete() {
    // console.log(this.props.index);
    const { handleItemDelete, index } = this.props;

    handleItemDelete(index);
  }

}
// 要求 传递参数的 类型 可以直接写成静态属性
// TodoItem.propTypes = {
//   test: PropTypes.string,
//   content: PropTypes.string.isRequired,// 必须传递 且为 字符串
//   index: PropTypes.arrayOf(PropTypes.number, PropTypes.string), // 多个类型
//   handleItemDelete: PropTypes.func
// }
// 定义默认参数 同上
// TodoItem.defaultProps = {
//   index: -1,
//   test: "test"
// }

export default TodoItem;