import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  ActiveListWrapper,
  ActiveListItem,
  ActiveListItemTitle,
  ActiveListItemImg,
  ActiveListItemMain,
  ActiveListItemInfo,
  ActiveListItemMeta
} from './style';

class ActiveList extends Component {
  render() {
    const { articleList } = this.props;
    const _articleList = articleList.toJS();
    return (
      <ActiveListWrapper>
        {
          _articleList.map((item) => (

            <ActiveListItem key={item.id}>
              <ActiveListItemMain>
                <ActiveListItemTitle>
                  <Link to={item.id}>{item.title}</Link>
                </ActiveListItemTitle>
                <ActiveListItemInfo>
                  {item.info}
                </ActiveListItemInfo>
                <ActiveListItemMeta>
                  <a href="12">{item.about}</a>
                  <a href="123">
                    <i className="iconfont">&#xe661;</i> {item.likenum}
                </a>
                  <span>
                    <i className="iconfont">&#xe787;</i> {item.commentnum}
                </span>
                </ActiveListItemMeta>
              </ActiveListItemMain>
              {
                item.img_url ? <ActiveListItemImg src={item.img_url} /> : null
              }
            </ActiveListItem>)
          )
        }

      </ActiveListWrapper>
    );

  }
}

export default ActiveList;