import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif; 
    color: #fff;
  }

  #root{
    margin: 0 auto;
  }

  body {
    background: url("https://unionfilms.org/images/events/events-background.jpg");  
    background-size: cover;    
    background-attachment: fixed;
    overflow: overlay;       
  }

  input {
    background: transparent;
    border: 1px solid #fff;
    padding: 10px;
    color: inherit;
    font-size: 18px;
  }

  button {
    background: transparent;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 10px;
    color: inherit;
    font-size: 22px;
    transition: 0.4s;

    cursor: pointer;
    :hover {
      box-shadow: 1px 24px 67px -2px rgba(255, 255, 255, 0.4);
      transition: 0.4s;
    }
  }
`

export default GlobalStyle;