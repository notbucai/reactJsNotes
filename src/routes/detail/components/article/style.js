import styled from 'styled-components';

export const ArticleWrapper = styled.div`
  width: 620px;
  margin: 0 auto;
  position: relative;
`;

export const ArticleTitle = styled.h1`
  font-size: 34px;
  font-weight: bold;
  margin: 20px 0;
`;

export const ArticleAuthor = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;
`;

export const ArticleAuthorImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const ArticleAuthorMain = styled.div`

`;

export const ArticleAuthorUname = styled.div`
  font-size: 16px;
  >a{
    color: #333;
  }
  >.focus{
    /* padding: 4px; */
    margin-left: 8px;
    font-size: 12px;
    padding: 0 7px 0 5px;
    color: #fff;
    border-radius: 10px;
    background-color: #42c02e;
    user-select: none;
    cursor: pointer;
  }
`;

export const ArticleAuthorInfo = styled.div`
  margin-top: 10px;
  font-size: 12px;
  color: #999;
  >span{
    margin-right: 10px;
  }
`;

export const ActicleCentent = styled.div`
  line-height: 1.4;
  color: #333;
`;

export const ActicleShowFoot = styled.div`
  margin: 20px 0;
  font-size: 12px;
  overflow: hidden;
  .iconfont{
    font-size: 12px;
    margin-right: 6px;
  }
  a{
    color: #888;
  }
  >.left{
    float: left;
  }
  >.right{
    float: right;
    color: #999;
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: hsla(0,0%,71%,.1);
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  margin: 30px 0;
`;

export const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  flex-grow: 1;
  padding: 0 10px;
`;

export const UserName = styled.div`
  font-size: 18px;
  >a{
    color: #333;
  }
  .iconfont{
    font-size: 18px;
    margin-left: 4px;
  }
  .male{
    color: #ea6f5a;
  }
  .female{
    color: #3194d0;
  }
`;

export const UserDetail = styled.p`
  font-size: 12px;
  margin-top: 8px;
  color: #999;
`;

export const UserAction = styled.a`
  color: #fff;
  padding: 12px 28px;
  border-radius: 20px;
  background-color: #ddd;
  cursor: pointer;
  &:hover{
    background-color: #eee;
  }
  &.focus{
    background-color: #42c02e;
    &:hover{
      background-color: #32cc19;
    }
  }
`;

export const AD = styled.div`
  position: fixed;
  width: 200px;
  overflow: hidden;
  left: 50%;
  top: 100px;
  margin-left: 350px;
  img{
    width: 100%;
  }
`;
