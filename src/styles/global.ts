import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
  }

  @keyframes appearFire {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes pulseFire {
    from{
      filter: brightness(60%);
    }
    to {
      filter: brightness(120%);
    }
  }

  .splash{
  position: fixed;
  z-index: 1000;
  background: var(--white);
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    opacity: 0;
    animation: appearFire 1.5s .5s forwards, pulseFire 1s alternate infinite;
  }
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
    background: linear-gradient(91deg, #FF5858 -10%, #2A234E 90%);
    position: relative;
    min-height: 100vh;
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
