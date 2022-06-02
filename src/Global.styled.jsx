import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`body {
  margin: 0;
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.625;
}
img {
  display: block;
  max-width: 100%;
  height:100%;
}
h1, h2, h3, h4, h5, h6 {
    margin: 0;

    font-weight: 400;
    font-size: 40px;
    line-height: 1;
    
    
    text-align: center;
   
}
ul {
    margin: 0;
    list-style: none;
    padding: 0;
}
p {
  margin: 0;
}`

