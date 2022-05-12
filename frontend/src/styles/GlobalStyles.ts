import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box ;
  }

  body {
    max-width: 2000px;
    width: 100%;
    border: 2px solid red;
    font-family: Georgia, 'Times New Roman', Times, serif
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  img {
    width:100% ;
    object-fit: cover;
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
  }

  input, textarea {
    outline: none;
    border:none ;
  }

`;
