import React, { Component } from 'react';
import { DetailWrapper } from './style';

import { connect } from 'react-redux';

import Article from './components/article';
import { getArticleCommentDataAction, getOneArticleDataAction } from './store/action_creators';

class Detail extends Component {
  componentDidMount() {
    const p_id = this.props.match.params.id;
    if (p_id) {
      this.props.getOneArticleData(p_id);
      this.props.getArticleCommentsData();
    }
  }

  render() {
    const { comments, article } = this.props;
    return (
      <DetailWrapper>
        <Article comments={comments} article={article} />
      </DetailWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.getIn(['detail', 'comments']),
    article: state.getIn(['detail', 'article']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArticleCommentsData() {
      const action = getArticleCommentDataAction(1, 2);

      dispatch(action);
    },

    getOneArticleData(a_id) {
      const action = getOneArticleDataAction(a_id);
      dispatch(action);
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);