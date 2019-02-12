import styled from 'styled-components';

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
