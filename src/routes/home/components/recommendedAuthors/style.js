import styled from 'styled-components';

export const RecommendedAuthorsWrapper = styled.div`
  width: 100%;
`;

export const RecommendedAuthorsHeader = styled.header`
  font-size: 14px;
  color: #666;
`;

export const RecommendedAuthorsReLoad = styled.span`
  float: right;
  font-size: 12px;
  cursor: pointer;
  color: #888;
  .iconfont {
    font-size: 12px;
    transition: all .5s ease;
    display: inline-block;
  }
`;

export const RecommendedAuthorsMain = styled.main`
  
`;

export const RecommendedAuthorsItem = styled.div`
  margin-top: 15px;
  display: flex;
`;

export const RecommendedAuthorsItemImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const RecommendedAuthorsItemContent = styled.div`
  flex-grow: 1;
  padding-left: 10px;
  margin-top: 6px;
`;

export const RecommendedAuthorsItemName = styled.p`
  font-size: 14px;
  >a {
    color: #333;
  }
`;

export const RecommendedAuthorsItemInfo = styled.p`
  font-size: 12px;
  color: #666;
  margin-top: 8px;
`;

export const RecommendedAuthorsItemAction = styled.span`
  margin-top: 6px;
  font-size: 14px;
  color: #42c02e;
  cursor: pointer;
  overflow: hidden;
  height: 20px;
  display: inherit;
`;

export const RecommendedAuthorsAll = styled.div`
  width: 100%;
  height: 38px;
  background-color: #f9f9f9;
  border: 1px solid #e8e8e8;
  margin-top: 20px;
  text-align: center;
  line-height: 38px;
  font-size: 12px;
  color: #666;
  cursor: pointer;
  border-radius: 4px;
`;
