import styled from 'styled-components';

export const AlertWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  top: 20%;
  left: 50%;
  box-sizing: border-box;
  padding: 10px;
  margin-left: -50px;
  min-height: 60px;
  width: 200px;

  background-color: #fff;
  box-shadow: 0 0 8px #eee;
  border: 1px solid #f0f0f0;
  border-radius: 4px;

  &.error{
    border-color: #f59595;
    box-shadow: 0 0 6px #f90e0e;
    background-color: #fff2f2;
  }

  &.info{
    background-color: #fff;
    box-shadow: 0 0 8px #eee;
    border: 1px solid #f0f0f0;
  }

  &.alert-enter,&.alert-appear{
    opacity: .2;
  }
  &.alert-enter-active,&.alert-appear-active{
    opacity: 1;
    transition: all .5s;
  }
  &.alert-enter-done{
    opacity: 1;
  }

  &.alert-exit{
    opacity: 1;
  }
  &.alert-exit-active{
    opacity: 0;
    transition: all 1s;
  }
  &.alert-exit-done{
    opacity: 0;
  }

`;