import styled from 'styled-components';

export const HomeMain = styled.main`
  margin-top: 30px;
  display: flex;
  /* overflow: hidden; */
`;

export const HomeLeft = styled.div`
  margin-right: 30px;
  min-height: 280px;
  flex-grow: 1;
  overflow: hidden;
  .swiper-container{
    width: auto;
    height: 280px;
    border-radius: 6px;
    &:hover .swiper-button-next, &:hover .swiper-button-prev{
      display: block;
    }
    .swiper-slide{
      img{
        height: 100%;
        width: 100%;
      }
    }
  }
  .swiper-button-next{
    right: 0;
    border-radius: 8px 0  0 8px;
    background-image: url("data:image/svg+xml;charset=utf-8,<svg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'><path%20d%3D'M17%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F><%2Fsvg>");
  }
  .swiper-button-prev{
    border-radius:  0 8px 8px 0 ;
    left: 0;
    background-image: url("data:image/svg+xml;charset=utf-8,<svg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'><path%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F><%2Fsvg>");
  }
  .swiper-button-next, .swiper-button-prev{
    color: #fff;
    height: 10px;
    width: 10px;
    padding:20px 14px;
    background-color: #3338;
    display: none;
    background-size: 20px 20px;
  }
  
  .swiper-pagination-bullet.swiper-pagination-bullet-active{
    background-color: #fff;
  }
  .swiper-pagination-bullet{
    background-color: #666;
    width: 40px;
    height: 2px;
    border-radius: 0;
  }
`;


export const HomeRight = styled.div`
  min-width: 280px;
  min-height: 200px;
  /* background-color: #fac; */
  margin-top: -4px;
`;

export const LoadMore = styled.div`
  width: 100%;
  line-height: 40px;
  border-radius: 20px;
  text-align: center;
  background-color: #a5a5a5;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  margin: 30px 0 60px;
  &:hover{
    background-color: #a0a0a0;
  }
`;
