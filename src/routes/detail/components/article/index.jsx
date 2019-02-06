import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
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
  UserInfoWrapper,
  UserDetail,
  UserImg,
  UserInfo,
  UserName,
  UserAction,
  CommentWrappr,
  CommentAction,
  CommentUserImg,
  CommentActionBtn,
  CommentCentext,
  CommentActionBtnRight,
  CommentMain,
  CommentMainHeight,
  CommentMainHeightRight,
  CommentList,
  CommentItem,
  CommentItemUserImg,
  CommentItemUserInfo,
  CommentItemUserName,
  CommentItemUserSendInfo,
  CommentItemUser,
  AD
} from './style';

class Article extends PureComponent {
  render() {

    return (
      <ArticleWrapper>
        {/* 标题 */}
        <ArticleTitle>我为什么强烈建议你不要看大冰的书？</ArticleTitle>
        {/* 文章以及作者信息 */}
        <ArticleAuthor>
          <ArticleAuthorImg src="https://upload.jianshu.io/users/upload_avatars/8743574/497ddc26-65d0-4d27-8001-f28d69e95f97.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" />
          <ArticleAuthorMain>
            <ArticleAuthorUname>
              <Link to="/">不才</Link>
              <span className="focus">+关注</span>
            </ArticleAuthorUname>
            <ArticleAuthorInfo>
              <span>2018.11.10 18:38*</span>
              <span>字数 1712</span>
              <span>阅读 90115</span>
              <span>评论 599</span>
              <span>喜欢 1199</span>
              <span>赞赏 2</span>
            </ArticleAuthorInfo>
          </ArticleAuthorMain>
        </ArticleAuthor>
        {/* 主要内容 */}
        <ActicleCentent>
          <p>每次大冰出新书就有人出来骂：卧槽，这人又出来骗钱了。</p>
          <p>我不敢公然说这种话，不过，我买了大冰三本书，看了一本多一点点，扔了三本，然后我发现他出了第四本——哎，可能我看书的速度实在是太慢了。</p>
          <p>还没感慨完呢，我发现，他的新书又在网上搞打折促销，还搞捆绑销售……如果淘宝上有某个商品一直在打折促销，你会是什么感受呢？</p>
        </ActicleCentent>

        <ActicleShowFoot>
          <Link className="left" to="/">
            <i className="iconfont">&#xe618;</i>
            鸡毛掸子
          </Link>
          <span className="right">
            &copy; 著作权归作者所有
          </span>
        </ActicleShowFoot>

        <UserInfoWrapper>
          <UserImg src="https://upload.jianshu.io/users/upload_avatars/15429116/8c5c6324-33b7-458b-9571-0a4622cd933b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" />
          <UserInfo>
            <UserName>
              <Link to="/">不才</Link>
              <i className="iconfont female">&#xe71a;</i>
              <i className="iconfont male">&#xe71c;</i>
              {/* male */}
            </UserName>
            <UserDetail>
              写了 22812 字，被 50 人关注，获得了 240 个喜欢
            </UserDetail>
          </UserInfo>
          <UserAction>+关注</UserAction>
        </UserInfoWrapper>


        <CommentWrappr>
          <CommentAction>
            <CommentUserImg src="https://upload.jianshu.io/users/upload_avatars/16175630/e2ee85e5-7cb0-429d-a517-bb1c6f1833e4?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp" />
            <CommentCentext>
              {/* <textarea placeholder="写下你的评论..."></textarea> */}
              <div className="CommentNoLogin">
                <div className="mainAction">
                  <Link to="/login">登陆</Link> 后才能评论
                </div>
              </div>
            </CommentCentext>
            <CommentActionBtn>
              <CommentActionBtnRight>
                <button className="btn cancel">
                  取消
                </button>
                <button className="btn send">发送</button>
              </CommentActionBtnRight>
            </CommentActionBtn>
          </CommentAction>

          <CommentMain>
            <CommentMainHeight>
              89条评论
              <CommentMainHeightRight>
                <span className="active">按时间倒序</span>
                <span>按时间正序</span>
              </CommentMainHeightRight>
            </CommentMainHeight>

            <CommentList>

              <CommentItem>
                <CommentItemUser>
                  <CommentItemUserImg src="https://cdn2.jianshu.io/assets/default_avatar/12-aeeea4bedf10f2a12c0d50d626951489.jpg" />
                  <CommentItemUserInfo>
                    <CommentItemUserName>不才</CommentItemUserName>
                    <CommentItemUserSendInfo>82楼 · 2019.02.05 18:42</CommentItemUserSendInfo>
                  </CommentItemUserInfo>
                </CommentItemUser>
                
              </CommentItem>

            </CommentList>

          </CommentMain>

        </CommentWrappr>


        {/* 侧边广告 */}
        <AD>
          <img src="//cdn2.jianshu.io/assets/web/web-note-ad-side-banner-22096669b4c4b91c3b9266894e951aef.png" alt="" />
        </AD>

      </ArticleWrapper>
    );
  }
}

export default Article;