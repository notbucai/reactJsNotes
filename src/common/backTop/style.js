import styled from 'styled-components';

export const BackTopWrapper = styled.div`
  position: fixed;
  bottom: 60px;
  right: 60px;
  width: 50px;
  height: 50px;
  overflow: hidden;
  background-color: #fafafa;
  display: none;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 22px;
  border: 1px solid #eee;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  box-shadow: 0 0 6px #f0f0f0;
  &.show{
    display: flex;
  }
`;