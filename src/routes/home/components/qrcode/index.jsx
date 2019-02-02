import React from 'react';
import { Link } from 'react-router-dom';
import { QrcodeWrapper, QrcodeShowMain, QrcodeShowImg, QrcodeShowContent, QrcodeShowTitle, QrcodeShowDescription, QrcodeShow } from './style';

const Board = (props) => {
  return (
    <QrcodeWrapper>
      <Link to="123">
        <QrcodeShowMain>
          <QrcodeShowImg src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" />
          <QrcodeShowContent>

            <QrcodeShowTitle>
              下载简书手机App
            </QrcodeShowTitle>
            <QrcodeShowDescription>
              随时随地发现和创作内容
            </QrcodeShowDescription>
          </QrcodeShowContent>
        </QrcodeShowMain>
      </Link>
      <QrcodeShow className="qrcode">
        <img src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="" />
      </QrcodeShow>
    </QrcodeWrapper>
  );
}

export default Board;