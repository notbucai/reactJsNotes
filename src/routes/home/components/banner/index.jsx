import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'

class Banner extends PureComponent {

  componentDidMount() {
    this.handleInitAndReLoad();
  }

  componentDidUpdate() {
    this.handleInitAndReLoad();
  }

  handleInitAndReLoad() {
    this.swiper && this.swiper.destroy(false);
    this.swiper = new Swiper('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      dynamicBullets: true
      // // 如果需要滚动条
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });
  }

  render() {
    const {
      bannerList
    } = this.props;

    const _bannerList = bannerList.toJS();

    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {
            _bannerList.map((item) => (
              <div className="swiper-slide" key={item.id}>
                <Link to={item.article_id}>
                  <img src={item.img_url} alt="" />
                </Link>
              </div>
            ))
          }

        </div>
        <div className="swiper-pagination"></div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        {/* <div className="swiper-scrollbar"></div> */}
      </div>
    );
  }

}

export default Banner;