import styled from 'styled-components';

export const TopicWrapper = styled.div`
  margin: 30px 0;
`;

export const TopicItem = styled.div`
  display: block;
  float: left;
  height: 32px;
  line-height: 32px;
  background-color: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 4px;
  overflow: hidden;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const TopicItemImg = styled.img`
  height: 32px;
  width: 32px;
  float: left;
`;

export const TopicItemText = styled.span`
  float: left;
  padding: 0 6px;
  font-size: 14px;
  color: #333;
`;

export const TopicGo = styled.span`
  float: left;
  font-size: 12px;
  line-height: 32px;
  color: #888;
`;