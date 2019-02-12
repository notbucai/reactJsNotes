import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
// import { CSSTransition } from 'react-transition-group';
import {
  ArticleWrapper,
  ArticleTitle,
  ArticleAuthor,
  ArticleAuthorImg,
  ArticleAuthorMain,
  ArticleAuthorUname,
  ArticleAuthorInfo,
  ActicleCentent,
  ActicleShowFoot,
  AD
} from './style';

import CommentList from '../commentList';
import UserInfo from '../userinfo';

class Article extends PureComponent {

  render() {
    const { comments, article, handleUserFocus } = this.props;
    const commentsList = comments.comments || [];
    const _article = article;

    return (
      <ArticleWrapper>
        {/* 标题 */}
        <ArticleTitle>{_article.title}</ArticleTitle>
        {/* 文章以及作者信息 */}
        <ArticleAuthor>
          <ArticleAuthorImg src={_article.user && _article.user.avatar} />
          <ArticleAuthorMain>
            <ArticleAuthorUname>
              <Link to="/">{_article.user && _article.user.nickname}</Link>
              <span className="focus" onClick={handleUserFocus}>+关注</span>
            </ArticleAuthorUname>
            <ArticleAuthorInfo>
              <span>{_article.create_date}</span>
              <span>字数 {_article.wordage}</span>
              <span>阅读 {_article.views_count}</span>
              <span>评论 {_article.comments_count}</span>
              <span>喜欢 {_article.likes_count}</span>
              <span>赞赏 {_article.likes_count}</span>
            </ArticleAuthorInfo>
          </ArticleAuthorMain>
        </ArticleAuthor>
        {/* 主要内容 */}
        <ActicleCentent dangerouslySetInnerHTML={{ __html: _article.content }}>

        </ActicleCentent>
        {/* 文章底部分类 版权 */}
        <ActicleShowFoot>
          <Link className="left" to="/">
            <i className="iconfont">&#xe618;</i>
            {_article.notebook && _article.notebook.name}
          </Link>
          <span className="right">
            &copy; 著作权归作者所有
          </span>
        </ActicleShowFoot>
        {/* 文章发表用户信息 */}
        <UserInfo userinfo={_article.user} handleUserFocus={handleUserFocus} />
        {/* 评论区 */}
        <CommentList commentsList={commentsList} />
        {/* 侧边广告 */}
        <AD>
          <img src="//cdn2.jianshu.io/assets/web/web-note-ad-side-banner-22096669b4c4b91c3b9266894e951aef.png" alt="" />
        </AD>

      </ArticleWrapper >
    );
  }

}

export default Article;