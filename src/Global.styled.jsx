import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  
}
img {
  display: block;
  max-width: 100%;
  height:100%;
}
h1, h2, h3, h4, h5, h6 {
    margin: 0;
    /* font-family: 'Josefin Sans', sans-serif; */
    
    
    text-align: center;
    font-weight: 500;
}
ul {
    margin: 0;
    list-style: none;
    padding: 0;
}
p {
  margin: 0;
}`

