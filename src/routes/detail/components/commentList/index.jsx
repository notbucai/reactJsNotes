import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import {
  CommentWrappr,
  CommentAction,
  CommentUserImg,
  CommentActionBtn,
  CommentCentext,
  CommentActionBtnRight,
  CommentMain,
  CommentMainHeight,
  CommentMainHeightRight,
  CommentListWrappr,
  CommentItem,
  CommentItemUserImg,
  CommentItemUserInfo,
  CommentItemUserName,
  CommentItemUserSendInfo,
  CommentItemUser,
  CommentContent,
  CommentContentText,
  CommentContentAction,
  CommentContentChild,
  CommentContentActionSend,
  CommentContentChildItem,
  CommentContentChildItemContent,
  CommentContentChildItemInfo,
  AddCommentAction,
} from './style';




class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentsShow: [],
      textareas: [],
      isComment: false
    };
    this.addCommentAction = this.addCommentAction.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this)
    this.handleIsComment = this.handleIsComment.bind(this);
  }

  render() {
    const { commentsList } = this.props;

    return (

      <CommentWrappr>
        <CommentAction>
          <CommentUserImg src="https://upload.jianshu.io/users/upload_avatars/16175630/e2ee85e5-7cb0-429d-a517-bb1c6f1833e4?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp" />
          <CommentCentext>
            <textarea placeholder="写下你的评论..." onFocus={() => { this.handleIsComment(true) }}></textarea>
            {/* <div className="CommentNoLogin">
              <div className="mainAction">
                <Link to="/login">登陆</Link> 后才能评论
                </div>
            </div> */}
            <CSSTransition
              in={this.state.isComment}
              timeout={600}
              classNames="isComment"
              unmountOnExit
            >
              <CommentActionBtn>
                <CommentActionBtnRight>
                  <button className="btn cancel" type="button" onClick={() => { this.handleIsComment(false) }}>取消</button>
                  <button className="btn send">发送</button>
                </CommentActionBtnRight>
              </CommentActionBtn>
            </CSSTransition>
          </CommentCentext>

        </CommentAction>

        <CommentMain>
          <CommentMainHeight>
            条评论
              <CommentMainHeightRight>
              <span className="active">按时间倒序</span>
              <span>按时间正序</span>
            </CommentMainHeightRight>
          </CommentMainHeight>

          <CommentListWrappr>

            {
              commentsList.map((item, index) => (

                <CommentItem key={item.id}>
                  <CommentItemUser>
                    <CommentItemUserImg src={item.user.avatar} />
                    <CommentItemUserInfo>
                      <CommentItemUserName>{item.user.nickname}</CommentItemUserName>
                      <CommentItemUserSendInfo>{item.floor}楼 · {item.created_at}</CommentItemUserSendInfo>
                    </CommentItemUserInfo>
                  </CommentItemUser>
                  <CommentContent>
                    <CommentContentText>{item.compiled_content}</CommentContentText>
                    <CommentContentAction>
                      <CommentContentActionSend onClick={() => { this.addCommentAction(index) }}>
                        <i className="iconfont">&#xe661;</i> 回复
                        </CommentContentActionSend>
                    </CommentContentAction>
                    <CommentContentChild style={{ display: (item.children && item.children.length) || this.state.commentsShow[index] ? "" : "none" }}>

                      {
                        item.children.map(item_c => (
                          <CommentContentChildItem key={item_c.id}>
                            <CommentContentChildItemContent>
                              <span className="name"><Link to="/">{item_c.user.nickname}</Link>:</span>
                              <span><Link to="1">@小vae</Link> {item_c.compiled_content}</span>
                            </CommentContentChildItemContent>
                            <CommentContentChildItemInfo>
                              <span className="date">{item_c.created_at}</span>
                              <CommentContentActionSend onClick={() => { this.handleAddComment(index, item_c.user.nickname) }}>
                                <i className="iconfont">&#xe661;</i> 回复
                              </CommentContentActionSend>
                            </CommentContentChildItemInfo>
                          </CommentContentChildItem>
                        ))
                      }

                      {
                        item.children && item.children.length ? (
                          <AddCommentAction onClick={() => { this.addCommentAction(index) }}>
                            <i className="iconfont">&#xe661;</i> 添加新评论
                          </AddCommentAction>
                        ) : null
                      }

                      <CSSTransition
                        in={this.state.commentsShow[index]}
                        classNames="test"
                        unmountOnExit
                        timeout={600}
                      >
                        <CommentAction>
                          <CommentCentext>
                            <textarea placeholder="写下你的评论..." onChange={(el) => { this.handleTextareaChange(index, el) }} value={this.state.textareas[index]}></textarea>
                            <CommentActionBtn>
                              <CommentActionBtnRight>
                                <button className="btn cancel" type="button" onClick={() => { this.addCommentAction(index) }}>取消</button>
                                <button className="btn send">发送</button>
                              </CommentActionBtnRight>
                            </CommentActionBtn>
                          </CommentCentext>
                        </CommentAction>
                      </CSSTransition>

                    </CommentContentChild>
                  </CommentContent>

                </CommentItem>


              ))
            }

          </CommentListWrappr>

        </CommentMain>

      </CommentWrappr>

    );

  }

  addCommentAction(index) {

    this.setState((state) => {
      const { commentsShow, textareas } = state;
      commentsShow[index] = !commentsShow[index];
      // console.log(commentsShow);
      // .replace(/^@(.+?)\s|^/, "@" + nickname + " ")
      textareas[index] = (textareas[index] || "").replace(/^@(.+?)\s/, "");
      return {
        commentsShow,
        textareas
      };
    });
  }

  handleTextareaChange(index, el) {
    // console.log(index,el.target.value);
    const value = el.target.value;

    this.setState(state => {
      state.textareas[index] = value;
      return {
        textareas: state.textareas
      }
    });
  }

  handleAddComment(index, nickname) {
    // console.log(index,el.target.value);
    console.log(index, nickname);

    this.setState(state => {

      if (!state.textareas[index] || !state.textareas[index].startsWith("@" + nickname + " ")) {
        state.textareas[index] = (state.textareas[index] || "").replace(/^@(.+?)\s|^/, "@" + nickname + " ");
      }

      state.commentsShow[index] = true;
      return {
        textareas: state.textareas,
        commentsShow: state.commentsShow
      }
    });
  }
  handleIsComment(bool) {
    this.setState((prevState) => {
      return {
        isComment: bool
      }
    });
  }
}

export default CommentList;