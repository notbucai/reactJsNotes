import React from 'react';
import { Link } from 'react-router-dom';
import { BoardWrapper } from './style';


const Board = (props) => {
  return (
    <BoardWrapper>
      <Link to="123">
        <img src="//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png" alt="" />
      </Link>

      <Link to="123">
        <img src="//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png" alt="" />
      </Link>

      <Link to="123">
        <img src="//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png" alt="" />
      </Link>

      <Link to="123">
        <img src="//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png" alt="" />
      </Link>

      <Link to="123">
        <img src="//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png" alt="" />
      </Link>
    
    </BoardWrapper>
  );
}

export default Board;