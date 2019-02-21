import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import {
  UserHeaderWrapper
} from './style';

class UserHeader extends Component {
  render() {
    const { userData, u_id } = this.props;
    
    return (
      <UserHeaderWrapper>
        <img className="useraevter" src={userData.uavatar} alt="" />
        <div className="userinfo">
          <main>
            <h2 className="userinfo_name">{userData.uname}</h2>
            <div className="userinfo_list">
              <div className="userinfo_list-item">
                <Link to="/">
                  <p>{userData.ufocus}</p>
                  <span>
                    关注
                    <i className="iconfont">&#xe600;</i>
                  </span>
                </Link>
              </div>
              <div className="userinfo_list-item">
                <Link to="/">
                  <p>{userData.ufans}</p>
                  <span>
                    粉丝
                    <i className="iconfont">&#xe600;</i>
                  </span>
                </Link>
              </div>
              <div className="userinfo_list-item">
                <Link to="/">
                  <p>{userData.uarticles}</p>
                  <span>
                    文章
                    <i className="iconfont">&#xe600;</i>
                  </span>
                </Link>
              </div>
              <div className="userinfo_list-item">
                <p>{userData.uwords}</p>
                <span>
                  字数
                </span>
              </div>
              <div className="userinfo_list-item">
                <p>{userData.ulike}</p>
                <span>
                  喜欢
                  </span>
              </div>
            </div>
          </main>
        </div>
        {
          u_id === userData._id
            ?
            null
            :
            (
              <div className="userinfo_action">
                <button className="btn unfocus">+关注</button>
              </div>
            )
        }

      </UserHeaderWrapper>

    );
  }
}


export default UserHeader;
