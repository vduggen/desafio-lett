import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: #f8f8f8;
    color: #000;
  }

  body, input, button{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  button {
    cursor:pointer;
  }

  .active{
    width: 12px;
    height: 12px;
    border-radius: 50%;
    top: 0;
    right: 0;
    position: absolute;
    background-color: #ed161f;
  }

`;
