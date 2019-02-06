import React, { PureComponent, Fragment } from 'react';

import { connect } from 'react-redux';

import { HomeMain, HomeLeft, HomeRight, LoadMore } from './style';

import Banner from './components/banner';
import Topic from './components/topic';
import ActiveList from './components/activeList';
import Footer from './components/footer';

import Board from './components/board';
import Qrcode from './components/qrcode';
import RecommendedAuthors from './components/recommendedAuthors';

import BackTop from '../../common/backTop'

import { getBannerDataAction, getTopicDataAction, getActiveListAction, getLoadMoreArticleAction, getRecommendedAuthorsLoadAction } from './store/acrion_creators';

class Home extends PureComponent {

  async componentDidMount() {
    this.getData.bind(this)();
    // this.bindEvent.bind(this)();
  }

  getData(){
    this.props.handleInitTopicList();
    this.props.handleInitBannerList();
    this.props.handleInitActiveList();
    this.props.handleRecommendedAuthorsReload();
  }


  render() {

    const {
      bannerList,
      topicList,
      articleList,
      recommendedAuthors,
      loadMoreing,

      handleLoadMoreArticle,
      handleRecommendedAuthorsReload
    } = this.props;

    return (
      <Fragment>
        <HomeMain className="container">
          <HomeLeft>
            <Banner bannerList={bannerList} />
            <Topic topicList={topicList} />
            <ActiveList articleList={articleList} />
            <LoadMore onClick={() => handleLoadMoreArticle(loadMoreing)}>阅读更多</LoadMore>
            <Footer />
          </HomeLeft>
          <HomeRight>
            <Board />
            <Qrcode />
            <RecommendedAuthors
              recommendedAuthors={recommendedAuthors}
              handleRecommendedAuthorsReload={handleRecommendedAuthorsReload}
            />
          </HomeRight>
        </HomeMain>
        <BackTop/>
      </Fragment>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    bannerList: state.getIn(['home', 'bannerList']),
    topicList: state.getIn(['home', 'topicList']),
    articleList: state.getIn(['home', 'articleList']),
    loadMoreing: state.getIn(['home', 'loadMoreing']),
    recommendedAuthors: state.getIn(['home', 'recommendedAuthors']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInitBannerList() {
      const action = getBannerDataAction();
      dispatch(action);
    },
    handleInitTopicList() {
      const action = getTopicDataAction();
      dispatch(action);
    },
    handleInitActiveList() {
      const action = getActiveListAction();
      dispatch(action);
    },
    handleLoadMoreArticle(loadMoreing) {
      if (!loadMoreing) {
        const action = getLoadMoreArticleAction();
        dispatch(action);
      }
    },
    handleRecommendedAuthorsReload(ele) {

      if (ele) {
        const rotate = Number(ele.style.transform.replace(/([^0-9])/ig, ""));

        ele.style.transform = `rotate(${rotate + 360}deg)`;
      }

      const action = getRecommendedAuthorsLoadAction();
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
