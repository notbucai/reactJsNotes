import styled from 'styled-components';

export const ActiveListWrapper = styled.div`
  border-top: 1px solid #f0f0f0;
  width: 100%;
`;

export const ActiveListItem = styled.div`
  border-bottom: 1px solid #f0f0f0;
  padding: 15px 0;
  display: flex;
  /* align-items: center; */
`;

export const ActiveListItemMain = styled.div`
  flex-grow: 1;
  min-height: 100px;
  padding-right: 15px;
`;

export const ActiveListItemImg = styled.img`
  min-width: 150px;
  height: 100px;
  border-radius: 4px;
`;

export const ActiveListItemTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 6px;
  a{
    display: block;
    color: #333;
    &:hover{
      text-decoration: underline;
    }
  }
`;

export const ActiveListItemInfo = styled.div`
  font-size: 13px;
  line-height: 1.8;
  color: #aaa;
`;

export const ActiveListItemMeta = styled.div`
  margin-top: 8px;
  a,span{
    font-size: 12px;
    color: #b4b4b4;
    margin-right: 10px;
    .iconfont{
      font-size: 12px;
    }
  }

`;