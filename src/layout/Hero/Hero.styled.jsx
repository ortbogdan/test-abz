import styled from 'styled-components';
import backImg from '../../images/pexels-alexandr-podvalny-1227513.jpeg'
export const HeroSection = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 40px 0 71px 0;

   background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backImg});
   background-repeat: no-repeat;
   background-position: 50% 50%;
   background-size: cover;

   color: rgb(255, 255, 255);
`
export const HeroBox = styled.div`
   
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;

   text-align: center; 
@media screen and (min-width: 768px) {
     width: 380px
  }
   
`
export const HeroTitle = styled.h1`
    margin-bottom: 21px;
`
export const HeroInfo = styled.p`
    margin-bottom: 21px;
`
