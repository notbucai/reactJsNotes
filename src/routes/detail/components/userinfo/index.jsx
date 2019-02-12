import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import {
  UserInfoWrapper,
  UserDetail,
  UserImg,
  UserInfo,
  UserName,
  UserAction,
} from './style';

class Article extends PureComponent {

  render() {
    const { userinfo, handleUserFocus } = this.props;

    return (
      <UserInfoWrapper>
        <UserImg src={userinfo && userinfo.avatar} />
        <UserInfo>
          <UserName>
            <Link to="/">{userinfo && userinfo.nickname}</Link>
            {
              userinfo && userinfo.sex
                ?
                <i className="iconfont female">&#xe71a;</i>
                :
                <i className="iconfont male">&#xe71c;</i>
            }
            {/* male */}
          </UserName>
          <UserDetail>
            写了 {userinfo && userinfo.wordage} 字，被 {userinfo && userinfo.focus_count} 人关注，获得了 {userinfo && userinfo.focus_count} 个喜欢
        </UserDetail>
        </UserInfo>
        {/* focus */}
        <UserAction
          className={userinfo && userinfo.is_focus ? "focus" : ""}
          onClick={() => { handleUserFocus(userinfo.id) }}
        >
          {userinfo && userinfo.is_focus ? "+关注" : "取消关注"}
        </UserAction>
      </UserInfoWrapper>
    );
  }

}

export default Article;