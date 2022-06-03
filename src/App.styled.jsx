import styled from "styled-components";
import backImg from './images/pexels-alexandr-podvalny-1227513.jpeg'
export const HeroSection = styled.section`
   height: 500px;
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
   display: grid;
   grid-template-columns: 100%;
   grid-gap: 21px;
   justify-items: center;
   
   text-align: center; 
@media screen and (min-width: 768px) {
     width: 380px
  }
   
`

export const Title = styled.h1`
    margin-bottom: 50px;
` 
export const UsersList = styled.ul`
  margin-bottom: 50px;
  
  display: grid;
  grid-template-columns: 328px;
  grid-gap: 20px;
  justify-content: center;
  @media screen and (min-width: 768px){
    grid-template-columns: 344px 344px;
    grid-gap: 16px;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns:  282px 282px 282px;
    grid-gap: 29px;
  }
`