import React, { Component } from 'react';
import { DetailWrapper } from './style';


import Article from './components/article';


class Detail extends Component {
  render() {
    console.log(this.props.match.params.id);

    return (
      <DetailWrapper>
        <Article />
      </DetailWrapper>
      );
    }
  }
  
export default Detail;