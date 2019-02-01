import React, { Component } from 'react';

import { connect } from 'react-redux';

import { HomeMain, HomeLeft, HomeRight } from './style';

import Banner from './components/banner'
import Topic from './components/Topic'
import { getBannerDataAction, getTopicDataAction } from './store/acrion_creators';

class Home extends Component {

  async componentDidMount(){
    this.props.handleInitTopicList();
    this.props.handleInitBannerList();
  }

  render() {

    const {
      bannerList,
      topicList
    } = this.props;

    return (

      <HomeMain className="container">
        <HomeLeft>
          <Banner bannerList={bannerList} />
          <Topic topicList={topicList} />
        </HomeLeft>
        <HomeRight>
          1
        </HomeRight>
      </HomeMain>

    );

  }
}

const mapStateToProps = (state) => {
  return {
    bannerList: state.getIn(['home', 'bannerList']),
    topicList: state.getIn(['home', 'topicList']),
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
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
