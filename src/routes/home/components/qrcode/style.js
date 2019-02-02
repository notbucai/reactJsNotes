import styled from 'styled-components';

export const QrcodeWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  >a{
    display: block;
  }
  >.qrcode{
    display: none;
  }
  &:hover .qrcode{
    display: flex;
  }
`;

export const QrcodeShowMain = styled.div`
  z-index: -1;
  position: relative;
  width: 100%;
  padding: 10px 22px;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 10px;
`;

export const QrcodeShowImg = styled.img`
  width: 60px;
  height: 60px;
`;

export const QrcodeShowContent = styled.div`
  margin-left: 10px;
  font-size: 14px;
`;

export const QrcodeShowTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

export const QrcodeShowDescription = styled.div`
  color: #999;
  font-size: 12px;
`;

export const QrcodeShow = styled.div`
  position: absolute;
  top: -198px;
  left: 50px;
  width: 180px;
  height: 180px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
  box-shadow: 0 0 10px #999;
  &::after{
    content: "";
    position: absolute;
    /* z-index: -1; */
    bottom: -11px;
    width: 20px;
    height: 20px;
    /* box-shadow: 0 0 10px #999; */
    border: 1px solid #ccc;
    border-top: 0;
    /* border-right: 0; */
    border-left: 0;
    background-color: #fff;
    transform: rotate(45deg);
    overflow: hidden;
    border-radius: 4px;
  }
  >img{
    width: 80%;
    height: 80%;
    border: 1px solid #f0f0f0;
  }
`;