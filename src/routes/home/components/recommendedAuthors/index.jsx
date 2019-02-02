import React from 'react';
import { Link } from 'react-router-dom';
import {
  RecommendedAuthorsWrapper,
  RecommendedAuthorsHeader,
  RecommendedAuthorsReLoad,
  RecommendedAuthorsMain,
  RecommendedAuthorsItem,
  RecommendedAuthorsItemImg,
  RecommendedAuthorsItemContent,
  RecommendedAuthorsItemName,
  RecommendedAuthorsItemInfo,
  RecommendedAuthorsItemAction,
  RecommendedAuthorsAll,
} from './style';

const RecommendedAuthors = (props) => {
  const {
    recommendedAuthors,
    handleRecommendedAuthorsReload
  } = props;

  const _recommendedAuthors = recommendedAuthors.toJS();
  let refs = null;
  return (
    <RecommendedAuthorsWrapper>
      <RecommendedAuthorsHeader>
        推荐作者
        <RecommendedAuthorsReLoad onClick={() => handleRecommendedAuthorsReload(refs)}>
          <i className="iconfont" ref={(ref) => refs = ref}>&#xe784;</i> 换一批
        </RecommendedAuthorsReLoad>
      </RecommendedAuthorsHeader>
      <RecommendedAuthorsMain>

        {
          _recommendedAuthors.map((item) => (
            <RecommendedAuthorsItem key={item.id}>
              <RecommendedAuthorsItemImg src={item.img_url} />
              <RecommendedAuthorsItemContent>
                <RecommendedAuthorsItemName>
                  <Link to="1">{item.name}</Link>
                </RecommendedAuthorsItemName>
                <RecommendedAuthorsItemInfo>
                  <span>写了{item.wordsnum}k字</span>
                  <em>·</em>
                  <span>{item.lovenum}喜欢</span>
                </RecommendedAuthorsItemInfo>
              </RecommendedAuthorsItemContent>
              <RecommendedAuthorsItemAction>+关注</RecommendedAuthorsItemAction>
            </RecommendedAuthorsItem>

          ))
        }

      </RecommendedAuthorsMain>

      <RecommendedAuthorsAll>加载全部 &gt;</RecommendedAuthorsAll>

    </RecommendedAuthorsWrapper>
  );
}

export default RecommendedAuthors;