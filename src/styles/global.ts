import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
  }

  :root{
    font-size: 62.5%;
    --black: #1C1C1E;
    --white: #F8F7FC;
    --gray-2: #C5C4C9;
    --blue: #1365B5;
    --red-200: #D45F5F;
    --red-300: #CC3837;
    --red-400: #B51B1B;
    --red-500: #990c0c;
    --red-600: #721212;
    --green: #53b151;
  }

  body{
    background-color: var(--white);
    position: relative;
    min-height: 100vh;

    ::before{
      content: '';
      background-image: url('/back2.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      opacity: 1;
      top: 0;
    }
  }

  button, input, textarea, select{
    border: 0;
    background: none;
  }

  img{ 
    max-width: 100%;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul, li{
    display: inline;
  }
`;
