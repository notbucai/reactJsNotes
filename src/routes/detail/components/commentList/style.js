import styled from 'styled-components';

export const CommentWrappr = styled.div`

`;

export const CommentAction = styled.form`
  position: relative;
  display: flex;
  overflow: hidden;
  &.test-enter{
    height: 0;
  }
  &.test-enter-active{
    transition: all .6s;
    height: 130px;
  }
  &.test-enter-done{
    height: auto;
  }
  &.test-exit{
    height: 130px;
  }
  &.test-exit-active{
    transition: all .6s;
    height: 0;
  }
  &.test-exit-done{
    height: 0;    
  }
`;

export const CommentUserImg = styled.img`
  /* position: absolute; */
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 14px;
`;

export const CommentCentext = styled.div`
  /* width: 100%; */
  /* padding-left: 48px; */
  /* overflow: hidden; */
  flex-grow: 1;
  position: relative;
  >textarea,>.CommentNoLogin{
    box-sizing: border-box; 
    padding: 10px 15px;
    width: 100%;
    height: 80px;
    font-size: 13px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    background-color: hsla(0,0%,71%,.1);
    resize: none;
    display: inline-block;
    vertical-align: top;
    outline-style: none;
  }
  .CommentNoLogin{
    position: relative;
    .mainAction{
      position: absolute;
      width: 100%;
      text-align: center;
      margin-top: 22px;
      >a{
        background-color: #fff;
        width: 78px;
        margin: 11px 10px 0 0;
        padding: 7px 18px;
        font-size: 16px;
        border: none;
        border-radius: 20px;
        color: #fff!important;
        background-color: #3194d0;
        outline: none;
      }
    }
  }
`;



export const CommentActionBtn = styled.div`
  overflow: hidden;
  margin-top: 10px;
`;

export const CommentActionBtnRight = styled.div`
  float: right;
  >.btn{
    padding: 8px 24px;
    height: 40px;
    background-color: transparent;
    border: 0;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
    margin-left: 10px;
    outline: none;
    &.send{
      color: #fff;
      background-color: #42c02e;
      &:hover{
        background-color: #2cbb1a;
      }
    }
    &.cancel{
      color: #999;
      &:hover{
        color: #666;
      }
    }
  }
`;

export const CommentMain = styled.div` 
  margin-top: 20px;
`;

export const CommentMainHeight = styled.div` 
  overflow: hidden;
  font-size: 18px;
  margin-bottom: 20px;
`;
export const CommentMainHeightRight = styled.div` 
  float: right;
  font-size: 14px;
  color: #999;
  cursor: pointer;
  .active{
    color: #333;
  }
  >span{
    margin-left: 10px;
  }
`;
export const CommentListWrappr = styled.div` 
  
`;
export const CommentItem = styled.div` 
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;
export const CommentItemUser = styled.div` 
  display: flex;
  align-items: center;
`;
export const CommentItemUserImg = styled.img` 
  width: 38px;
  height: 38px;
  border-radius: 50%;
`;
export const CommentItemUserInfo = styled.div`
  margin-left: 10px;
`;
export const CommentItemUserName = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 6px;
`;
export const CommentItemUserSendInfo = styled.p` 
  font-size: 12px;  
  color: #999;
`;

export const CommentContent = styled.div`
  /* margin: 20px 0; */
`;

export const CommentContentText = styled.div`
  margin: 20px 0;
  color: #555;
  line-height: 1.6;
`;

export const CommentContentAction = styled.div`
  font-size: 14px;
  color: #969696;
  .iconfont{
    font-size: 14px;
  }
`;

export const CommentContentActionSend = styled.span`
  cursor: pointer;
  color: #969696;
  &:hover{
    color: #333;
  }
`;

export const CommentContentChild = styled.div`
  margin: 20px 0;
  border-left: 2px solid #d9d9d9;
  padding: 5px 0 5px 20px;
`;

export const CommentContentChildItem = styled.div`
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px dashed #f0f0f0;
`;

export const CommentContentChildItemContent = styled.div`
  color: #444;
  font-size: 14px;
  margin-bottom: 10px;
  a{
    color: #3194d0;
  }
  .name{
    margin-right: 10px;
  }
`;

export const CommentContentChildItemInfo = styled.div`
  font-size: 12px;
  .date{
    color: #969696;
    margin-right: 10px;
    font-size: 12px;
    font-weight: 500;
  }
`;

export const AddCommentAction = styled.div`
  cursor:pointer;
  margin-bottom: 15px;
  color: #979797;
  font-size: 14px;
  transition: color .4s;
  &:hover{
    color: #333;
  }
`;