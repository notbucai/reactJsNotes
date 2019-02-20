import styled from 'styled-components';

export const LoginWrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f0f0f0;
`;

export const LoginLogo = styled.img`
  position: absolute;
  top: 40px;
  left: 60px;
  width: 140px;
`;

export const LoginMain = styled.div`
  margin: 180px auto;
  width: 340px;
  min-height: 400px;
  background-color: #fff;
  box-shadow: 0 0 6px #ccc;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 6px;
  h2{
    text-align: center;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 600;
    .t{
      border-bottom: 2px solid #ccc;
      padding: 6px;
    }
  }
  form{
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    .inputGroup{
      border: 1px solid #ccc;
      border-bottom-width: 0;
      overflow: hidden;
      border-radius: 4px;
    }
    input{
      display: block;
      background-color: #f0f0f0;
      border-bottom: 1px solid #ccc;
      width: 100%;
      height: 46px;
      padding: 12px;
      box-sizing: border-box;
      color: #333;
      outline: none;
      font-size: 14px;
      &::placeholder{
        color: #999;
      }
    }
    button{
      margin-top: 30px;
      height: 46px;
      border-radius: 24px;
      background-color: #3194d0;
      border: none;
      color: #fff;
      font-size: 16px;
      outline: none;
      cursor: pointer;
      &:hover{
        background-color: #40aadd;
      }
    }
  }
`;