import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 16px;
  

  @media screen and (min-width: 768px) {
  padding: 0px 32px;
  width: 768px;
  }
  @media screen and (min-width: 1024px) {
  width:1024px;
  padding: 0px 60px; }
`;