import styled from 'styled-components';


export const UserMainWrapper = styled.div`
  margin-top: 30px;
`;

export const UserMainTab = styled.div`
  display: flex;
  border-bottom: 1px solid #f0f0f0;
`;

export const UserMainTabItem = styled.div`
  position: relative;
  padding: 14px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  color: #666;
  user-select: none;
  &:hover::after{
    width: 100%;
    height: 3px;
    background-color: #666;
    transition: .4s ease-in-out;
    opacity: 1;
    color: #333;
  }
  &.active{
    color: #333;
    &::after{
      width: 100%;
      height: 3px;
      background-color: #666;
      transition: .4s ease-in-out;
      opacity: 1;
      color: #333;
    }
  }
  &::after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    opacity: 0;
    background-color: #fff;
    transition: .4s ease-in-out;
  }
  .iconfont{
    margin-right: 10px;
  }
`;

export const UserMainList = styled.div`

`;

export const ItemArticleWrapper = styled.div`
  margin-top: 8px;
`;

export const ArticleItem = styled.div`
  padding: 20px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  >h2{
    margin: 0 0 10px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    a{
      color: #333;
      &:hover{
        text-decoration: underline;
      }
    }
  }
  >p{
    line-height: 1.5;
    font-size: 13px;
    color: #888;
    margin-bottom: 15px;
  }
  >.article_info{
    font-size: 12px;
    span{
      margin-right: 15px;
      color: #999;
    }
    .iconfont{
      font-size: 12px;
      margin-right: 4px;
    }
  }
`;

export const CommentItem = styled.div`
  padding: 20px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
`;


export const ItemType = styled.div`
  color: #888;
  font-size: 14px;
  margin-bottom: 6px;
  span{
    font-size: 12px;
  }
`;

export const CommentContent = styled.div`
  margin: 10px 0;
  .content{
    font-size: 14px;
    color: #333;
  }
  .articleWrap{
    border: 1px solid #ddd;
    border-radius: 4px;
    min-height: 40px;
    background-color: #f9f9f9;
    max-width: 540px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 16px 20px;
    img{
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 1px solid #f9f9f9;
    }
    .info{
      margin-left: 14px;
      flex-grow: 1;
      .name{
        margin-bottom: 4px;
        font-size: 16px;
      }
      p{
        font-size: 12px;
        line-height: 1.5;
        color: #888;
      }
    }
    .btn{
        border: 1px solid transparent;
        width: 100px;
        height: 42px;
        box-sizing: border-box;
        font-size: 16px;
        border-radius: 30px;
        cursor: pointer;
        &.unfocus{
          background-color: #fff;
          border-color: #ccc;
          color: #888;
          &:hover{
            background-color: #f9f9f9;
            border-color: #aaa;
          }
        }
        &.focus{
          background-color: #42c02e;
          color: #fff;
          border-color: #42c02e;
          &:hover{
            background-color: #19cc04;
            border-color: #19cc04;
          }
        }
      }
  }
`;

export const CommentSource = styled.div`
  border-left: 3px solid #ddd;
  padding-left: 10px;
  .title{
    font-size: 16px;
    color: #333; 
    text-decoration: underline;
  }
`;