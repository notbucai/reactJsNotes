import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import {
  UserHeaderWrapper
} from './style';

class UserHeader extends Component {
  render() {
    return (
        <UserHeaderWrapper>
          <img className="useraevter" src="https://upload.jianshu.io/users/upload_avatars/16175630/e2ee85e5-7cb0-429d-a517-bb1c6f1833e4?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240" alt="" />
          <div className="userinfo">
            <main>
              <h2 className="userinfo_name">不才</h2>
              <div className="userinfo_list">
                <div className="userinfo_list-item">
                  <Link to="/">
                    <p>0</p>
                    <span>
                      关注
                    <i className="iconfont">&#xe600;</i>
                    </span>
                  </Link>
                </div>
                <div className="userinfo_list-item">
                  <Link to="/">
                    <p>0</p>
                    <span>
                      关注
                    <i className="iconfont">&#xe600;</i>
                    </span>
                  </Link>
                </div>
                <div className="userinfo_list-item">
                  <Link to="/">
                    <p>000000</p>
                    <span>
                      关注
                    <i className="iconfont">&#xe600;</i>
                    </span>
                  </Link>
                </div>
                <div className="userinfo_list-item">
                  <Link to="/">
                    <p>0000000</p>
                    <span>
                      关注
                    <i className="iconfont">&#xe600;</i>
                    </span>
                  </Link>
                </div>
              </div>
            </main>
          </div>
          <div className="userinfo_action">
            <button className="btn unfocus">+关注</button>
          </div>
        </UserHeaderWrapper>

    );
  }
}


export default UserHeader;
