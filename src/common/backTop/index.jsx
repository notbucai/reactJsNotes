import React, { PureComponent } from "react";

import { BackTopWrapper } from './style';

class BackTop extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      toggleShow: false
    };
    this.timer = null;
    this.bindScrollEvent = this.bindScrollEvent.bind(this);
    this.handleBackTop = this.handleBackTop.bind(this);

  }
  componentDidMount() {
    // this.getData.bind(this)();
    this.bindEvent.bind(this)();
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.bindScrollEvent);
  }

  bindEvent() {
    window.addEventListener('scroll', this.bindScrollEvent);
  }

  bindScrollEvent(e) {
    // console.log(e);

    if (window.scrollY >= window.innerHeight) {
      this.setState({
        toggleShow: true
      });
      // console.log(this);

    } else {
      this.setState({
        toggleShow: false
      });
    }

  }
  handleBackTop() {
    clearInterval(this.timer);
    let initC = 10;
    this.timer = setInterval(() => {

      document.documentElement.scrollTop -= (initC+=10);
      if(window.scrollY <= initC){
        clearInterval(this.timer);
        document.documentElement.scrollTop = 0;
      }
    }, 30);
  }

  render() {
    return (
      <BackTopWrapper className={this.state.toggleShow ? "show" : ""} onClick={this.handleBackTop}>
        ∧
      </BackTopWrapper>
    );
  }

}

export default BackTop;