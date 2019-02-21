import styled from 'styled-components';


export const UserHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  .useraevter{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid #f0f0f0;
  }
  .userinfo{
    /* display: flex; */
    margin-left: 15px;
    flex-grow: 1;
    &_name{
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 8px;
    }
    &_action{
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
    &_list{
      display: flex;
      flex-grow: 1;
      align-items: flex-end;
      &-item{
        border-right: 1px solid #f0f0f0;
        padding-right: 15px; 
        margin-right: 15px;
        
        p{
          color: #333;
          font-size: 14px;
          font-weight: 600;
        }
        span{
          color: #888;
          font-size: 12px;
          .iconfont{
            font-size: 12px;
            transform: scale(0.5);
            display: inline-block;
          }
        }
        &:last-child{
          border-right: none;
        }
      }
      
    }
  }
`;