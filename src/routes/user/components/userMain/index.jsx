import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import {
  UserMainWrapper,
  UserMainTab,
  UserMainTabItem,
  UserMainList,
  ItemArticleWrapper,
  ArticleItem,
  CommentItem,
  ItemType,
  CommentContent,
  CommentSource
} from './style';

class UserHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 2
    }
    this.handleSwitchView = this.handleSwitchView.bind(this);
  }

  getActionView(index) {
    if (index === 1) {
      return (
        <ItemArticleWrapper>
          <ArticleItem>
            <h2>
              <Link to="/">和欣赏你的人在一起，很重要</Link>
            </h2>
            <p>01. 曾经听过这么一个故事，一个年轻人来到一个陌生的地方，碰到一位老人。 年轻人问：“这里如何？” 老人反问：“你的家乡如何？” 年轻人说：“...</p>
            <div className="article_info">
              <span>
                <i className="iconfont">&#xe62a;</i>103
            </span>
              <span>
                <i className="iconfont">&#xe661;</i>103
            </span>
              <span>
                <i className="iconfont">&#xe787;</i>103
            </span>
              <span>3小时前</span>
            </div>
          </ArticleItem>
          <ArticleItem>
            <h2>
              <Link to="/">和欣赏你的人在一起，很重要</Link>
            </h2>
            <p>01. 曾经听过这么一个故事，一个年轻人来到一个陌生的地方，碰到一位老人。 年轻人问：“这里如何？” 老人反问：“你的家乡如何？” 年轻人说：“...</p>
            <div className="article_info">
              <span>
                <i className="iconfont">&#xe62a;</i>103
            </span>
              <span>
                <i className="iconfont">&#xe661;</i>103
            </span>
              <span>
                <i className="iconfont">&#xe787;</i>103
            </span>
              <span>3小时前</span>
            </div>
          </ArticleItem>
          <ArticleItem>
            <h2>
              <Link to="/">和欣赏你的人在一起，很重要</Link>
            </h2>
            <p>01. 曾经听过这么一个故事，一个年轻人来到一个陌生的地方，碰到一位老人。 年轻人问：“这里如何？” 老人反问：“你的家乡如何？” 年轻人说：“...</p>
            <div className="article_info">
              <span>
                <i className="iconfont">&#xe62a;</i>103
            </span>
              <span>
                <i className="iconfont">&#xe661;</i>103
            </span>
              <span>
                <i className="iconfont">&#xe787;</i>103
            </span>
              <span>3小时前</span>
            </div>
          </ArticleItem>
          <ArticleItem>
            <h2>
              <Link to="/">和欣赏你的人在一起，很重要</Link>
            </h2>
            <p>01. 曾经听过这么一个故事，一个年轻人来到一个陌生的地方，碰到一位老人。 年轻人问：“这里如何？” 老人反问：“你的家乡如何？” 年轻人说：“...</p>
            <div className="article_info">
              <span>
                <i className="iconfont">&#xe62a;</i>103
            </span>
              <span>
                <i className="iconfont">&#xe661;</i>103
            </span>
              <span>
                <i className="iconfont">&#xe787;</i>103
            </span>
              <span>3小时前</span>
            </div>
          </ArticleItem>

        </ItemArticleWrapper>
      );
    } else if (index === 2) {
      return (
        <ItemArticleWrapper>
          <CommentItem>
            <ItemType>
              发表了评论 · <span>02.20 18:08</span>
            </ItemType>
            <CommentContent>
              <div className="content">@木子艾琪琦 我的手机右下角是中文的换行键，你的手机我就不清楚了，转弯的箭头一般是换行的意思，但有的是表示确认</div>

            </CommentContent>
            <CommentSource>
              <Link to="/p/" className="title">标题</Link>
            </CommentSource>
          </CommentItem>
          <CommentItem>
            <ItemType>
              赞了文章 · <span>02.20 18:08</span>
            </ItemType>
            {/* <CommentContent>
              <div className="content">@木子艾琪琦 我的手机右下角是中文的换行键，你的手机我就不清楚了，转弯的箭头一般是换行的意思，但有的是表示确认</div>             
            </CommentContent> */}
            <CommentSource>
              <Link to="/p/" className="title">标题</Link>
            </CommentSource>
          </CommentItem>
          <CommentItem>
            <ItemType>
              赞了评论 · <span>02.20 18:08</span>
            </ItemType>
            <CommentContent>
              <div className="content">@木子艾琪琦 我的手机右下角是中文的换行键，你的手机我就不清楚了，转弯的箭头一般是换行的意思，但有的是表示确认</div>
            </CommentContent>
            <CommentSource>
              <Link to="/p/" className="title">标题</Link>
            </CommentSource>
          </CommentItem>
          <CommentItem>
            <ItemType>
              关注了作者 · <span>02.20 18:08</span>
            </ItemType>
            <CommentContent>
              <div className="articleWrap">
                <img src="https://upload.jianshu.io/users/upload_avatars/15426982/44249b9a-c57b-4074-ae9b-b1c306a8e50a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180" alt="" />
                <div className="info">
                  <div className="name">bucai</div>
                  <p>写了 622241 字，被 1911 人关注，获得了 18506 个喜欢</p>
                </div>
                <button className="btn unfocus">+关注</button>
              </div>
            </CommentContent>
            {/* <CommentSource>
              <Link to="/p/" className="title">标题</Link>
            </CommentSource> */}
          </CommentItem>
        </ItemArticleWrapper>
      );
    }
  }

  handleSwitchView(index) {
    this.setState((prevState) => {
      return {
        index: index
      }
    });
  }

  render() {

    const { index } = this.state;
    const { handleSwitchView } = this;
    const ActionView = this.getActionView(index);

    return (
      <UserMainWrapper>

        <UserMainTab>
          <UserMainTabItem onClick={() => { handleSwitchView(1) }} className={index === 1 ? 'active' : null}>
            <i className="iconfont">&#xe769;</i>文章
          </UserMainTabItem>
          <UserMainTabItem onClick={() => { handleSwitchView(2) }} className={index === 2 ? 'active' : null}>
            <i className="iconfont">&#xe613;</i>动态
          </UserMainTabItem>
          <UserMainTabItem onClick={() => { handleSwitchView(3) }} className={index === 3 ? 'active' : null}>
            <i className="iconfont">&#xe647;</i>消息
          </UserMainTabItem>
        </UserMainTab>

        <UserMainList>

          {
            ActionView
          }

        </UserMainList>

      </UserMainWrapper>
    );
  }
}


export default UserHeader;
