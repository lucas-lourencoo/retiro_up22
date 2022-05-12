import styled from 'styled-components';

export const Container = styled.div`
  html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    text-align: left;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    max-width: 100%;
    color: #84a0ca;
  }

  img {
    max-width: 100%;
    filter: contrast(0) brightness(200%);
  }

  h1 {
    font-size: 19px;
    color: var(--white);
    font-family: Montserrat, Helvetica, sans-serif;
    font-weight: 600;
    line-height: 1.4;
    padding: 0;
    margin: 0;
  }

  h2 {
    font-size: 17px;
    line-height: 1.4;
    color: var(--white);
    font-family: Montserrat, Helvetica, sans-serif;
    font-weight: 400;
    padding: 0;
    margin: 0;
  }

  p {
    font-size: 16px;
    color: #333;
    font-family: Montserrat, Helvetica, sans-serif;
    font-weight: 600;
    line-height: 1.4;
    margin: 0;
    padding: 0;
  }

  small {
    font-size: 16px;
    color: #1d4059;
    font-family: Montserrat, Helvetica, sans-serif;
    font-weight: 400;
    line-height: 1.4;
    margin: 0;
    padding: 0;
  }

  a {
    font-family: Montserrat, Helvetica, sans-serif;
    font-weight: 400;
    text-decoration: none;
    color: #777;
    transition: 0.3s;
  }

  /* EDIT DESCRIPTION LINK COLOR */
  a:hover {
    color: #326b94;
  }

  #green {
    background: #34a853;
  }

  #green:hover {
    background: #3dc461;
  }

  #pink {
    background: #f09433;
    background: -moz-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: -webkit-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  }

  .section {
    width: 90%;
    max-width: 600px;
    position: relative;
    margin: 0 auto;
    background: none !important;
  }

  .social-spacing {
    margin-left: 16px;
    margin-right: 16px;
    white-space: nowrap;
    line-height: 1.5;
    color: var(--white);
  }

  .clear {
    clear: both;
  }

  .avy {
    opacity: 0.95;
    width: 150px;
    margin: 20px 0;
  }
  .avy:hover {
    opacity: 1;
  }
  .round {
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%; /* future proofing */
    -khtml-border-radius: 50%; /* for old Konqueror browsers */
    -webkit-appearance: none;
  }

  /* EDIT LINK UNDERLINE COLOR */
  .underline:hover {
    border-bottom: 1px solid #0d96e5;
  }

  .preul {
    border-bottom: 1px solid #eee;
  }

  .center-align {
    text-align: center;
  }

  .white {
    color: #fff;
  }

  .light-grey {
    color: var(--white);
    padding: 20px 0;
  }

  .divider {
    border-bottom: 1px solid #eee;
  }

  /* EDIT BUTTON BACKGROUND COLOR */
  .button {
    background: #1d4059;
    padding: 20px;
    margin: 20px auto;
    transition: 0.3s;
  }

  .button:hover {
    opacity: 1;
    background: #326b94;
  }

  .padding-top-50 {
    padding-top: 10px;
    background: none !important;
  }
  .padding-bottom-50 {
    padding-bottom: 1px;
    background: none !important;
  }
  .padding-bottom-100 {
    padding-top: 0px;
    background: none !important;
  }
  .padding-top-25 {
    padding-top: 25px;
  }
  .padding-top-15 {
    padding-top: 7px;
    background: none !important;
  }

  @media (max-width: 768px) {
  }
`;
