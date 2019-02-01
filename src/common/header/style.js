import styled from 'styled-components';
import logo from '../../static/img/logo.png';
const _height = 58;

export const HeaderWrapper = styled.div`
  /* background-color: #ccc; */
  border-bottom: 1px solid #f0f0f0;
  height: ${_height}px;

`;

export const HaaderLimit = styled.div`
  max-width: 1440px;
  min-width: 768px;
  margin: 0 auto;
  /* background-color: #CCC; */
  position: relative;
`;

export const Logo = styled.a.attrs({
  href: "/"
})`
  width: 112px;
  height: ${_height - 2}px;
  float: left;
  /* background-color: #ccc; */
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Nav = styled.div`
  position: relative;
  height: ${_height}px;
  /* background-color: #ff0; */
`;

export const NavItem = styled.div`
  float: left;
  line-height: ${_height}px;
  position: relative;
  .iconfont{
    font-size: 16px;

  }
  
`;
export const NavItemTagA = styled.div`
  padding: 0 15px;
  color: #333;
  font-weight: 500;
  display:block;
  &:hover{
    background-color: #f8f8f8;
  }
  &.active{
    color: #ea6f5a;
    &:hover{
      background-color: transparent;
    }
  }
`;

export const NavSearch = styled.input`
  width: 200px;
  height: ${_height - 18}px;
  border: none;
  background-color: #f0f0f0;
  box-sizing: border-box;
  border-radius: ${(_height - 20) / 2}px;
  margin: 0 15px;
  padding: 0 30px 0 20px;
  font-size: 14px;
  color: #444;
  & + i.iconfont{
    position: absolute;
    right: 24px;
    top: 30px;
    margin-top: -12px;
    border-radius: 50%;
    text-align: center;
    height: 24px;
    width: 24px;
    display: block;
    line-height: 24px;
    &.active{
      background-color: #888;
      color: #fff;
    }
  }
  &:focus{
    outline: none;
  }
  &::placeholder{
    color: #aaa;
  }
  &.search{
  }
  &.nacSearch-enter{
    width: 200px;
  }
  &.nacSearch-enter-active{
    width: 240px;
    transition: all .4s ease-in-out;
  }
  &.nacSearch-enter-done {
    width: 240px;
  }
  &.nacSearch-exit{
    width: 240px;
  }
  &.nacSearch-exit-active{
    width: 200px;
    transition: all .4s ease-in-out;
  }
  &.nacSearch-exit-done {
    width: 200px;
  }

`;

export const NavAction = styled.div`
  float: right;
  position: absolute;
  top: 0;
  right: 0;
  line-height: ${_height}px;
`;

// export const NavActionRegBtn = styled.button`
//   height: ${_height-20}px;
//   padding: 0 30px;
//   border: 1px solid #ea6f5a;
//   box-sizing: border-box;
//   margin-right: 20px;
//   border-radius: ${_height-20}px;
//   color: #ea6f5a;
//   font-weight: 600;
//   font-size: 14px;
// `;

export const NavActionA = styled.span`
  color: #888;
  font-size: 14px;
  margin: 0 15px;
`;

export const NavActionBtn = styled.span`
  padding: 9px 20px;
  background-color: #fff;
  border: 1px solid #ea6f5a;
  box-sizing: border-box;
  color: #ea6f5a;
  border-radius: ${_height - 20}px;
  font-size: 14px;
  font-weight: 600;
  margin-left: 20px;
  cursor: pointer;
  &:focus{
    outline: none;
  }
  &.extrude{
    background-color: #ea6f5a;
    color: #fff;
  }
`;

export const SearchInfo = styled.div`
  display: none;
  position: absolute;
  z-index: 10;
  top: ${_height + 2}px;
  margin: 0 15px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  &::before{
    content: "";
    position: absolute;
    z-index: -1;
    top: -5px;
    left: 20px;
    background-color: #fff;
    width: 20px;
    height: 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    transform: rotate(45deg);
  }
  &.search{
    display: block;
  }
`;

export const SearchInfoWrapper = styled.div`
  width: 200px;
  min-height: 100px;
  background-color: #fff;
  padding: 15px;
  box-sizing: border-box;
  user-select: none;
  .iconfont{
    font-size: 12px;
    transition: all .5s ease;
    display: inline-block;
  }
`;

export const SearchInfoHeader = styled.div`
  line-height: 1;
  font-size: 14px;
  color: #888;
`;

export const SearchInfoSwitch = styled.span`
  font-size: 12px;
  float: right;
  cursor: pointer;
`;

export const SearchInfoMain = styled.div`
  overflow: hidden;
  margin-top:15px;
  margin-left: -4px;
  margin-right: -4px;
`;

export const SearchInfoItem = styled.span`
  float: left;
  overflow: hidden;
  line-height: 1;
  margin:0 4px 10px;
  padding: 3px 5px;

  color: #888;
  font-size: 12px; 
  border: 1px solid #e6e6e6;
  border-radius: 2px;
`;