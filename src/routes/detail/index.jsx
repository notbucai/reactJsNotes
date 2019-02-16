import React, { Component } from 'react';
import { DetailWrapper } from './style';

import { connect } from 'react-redux';

import Article from './components/article';
import {
  getArticleCommentDataAction,
  getOneArticleDataAction,
  getOneUserFocusAction
} from './store/action_creators';
import { x_post } from '../../plugs/axios';
import { api_post_comment } from '../../api';

class Detail extends Component {
  componentDidMount() {
    const p_id = this.props.match.params.id;
    if (p_id) {
      this.props.getOneArticleData(p_id);
      this.props.getArticleCommentsData();
    }
  }

  render() {
    const {
      comments,
      article,
      handleUserFocus,
      handleSendComment
    } = this.props;
    const p_id = this.props.match.params.id;
    return (
      <DetailWrapper>
        <Article
          comments={comments}
          article={article}
          handleUserFocus={handleUserFocus}
          a_id={p_id}
          handleSendComment={handleSendComment}
        />
      </DetailWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.getIn(['detail', 'comments']).toJS(),
    article: state.getIn(['detail', 'article']).toJS(),
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

    handleUserFocus(u_id) {

      const action = getOneUserFocusAction(u_id);
      dispatch(action);

    },
    async handleSendComment({ a_id, r_u_id, content }) {
      const [res, err] = await x_post(api_post_comment, {
        a_id,
        r_u_id,
        content
      });

      if (err) {
        return {
          status: false,
          message: err.message
        }
      }
      const { data } = res;

      return data;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);