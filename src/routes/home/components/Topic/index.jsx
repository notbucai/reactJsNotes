import React from 'react';

import { Link } from 'react-router-dom';

import {
  TopicWrapper,
  TopicItem,
  TopicItemImg,
  TopicItemText,
  TopicGo
} from './style';

const Topic = (props) => {
  const { topicList } = props;

  const _topList = topicList.toJS();
  return (
    <TopicWrapper>

      {
        _topList.map((item) => (
          <Link to={item.id+""} key={item.id}>
            <TopicItem>
              <TopicItemImg src={item.img_url} />
              <TopicItemText>
                {item.title}
              </TopicItemText>
            </TopicItem>
          </Link>
        ))
      }

      <Link to="/123">
        <TopicGo href="#">
          更多热门专题 &gt;
          </TopicGo>
      </Link>

    </TopicWrapper>
  );

}

export default Topic;