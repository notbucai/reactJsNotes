import styled from 'styled-components';


export const FooterWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const FooterNav = styled.div`
  > a{
    font-size: 12px;
    color: #989898;
    &:hover{
      color: #888;
    }
  }
  > em{
    font-size: 12px;
    color: #989898;
    margin: 0 2px;
  }

`;

export const FooterICP = styled.div`
  color:#c8c8c8;
  font-size: 12px;
  margin-top: 15px;
  >a{
  color:#c8c8c8;
  }
  img{
    width: 26px;
    margin: 0 4px;
  }
`;