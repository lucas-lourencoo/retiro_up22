import styled from 'styled-components';
import Title from './components/Title';

export const Hero = styled.section`
  @keyframes upDown {
    from {
      bottom: -0.8rem;
    }
    to {
      bottom: 0.8rem;
    }
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes appearFromBottom {
    from {
      opacity: 0;
      transform: translateY(4rem);
    }
    to {
      opacity: 1;
    }
  }

  @keyframes appearFromRight {
    from {
      opacity: 0;
      width: 0;
      transform: translateX(4rem);
    }
    to {
      width: 52rem;
      opacity: 1;
    }
  }

  display: grid;
  max-width: 75%;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  margin: 0 auto;
  height: calc(100vh - 12rem);
  position: relative;
  padding-bottom: 8rem;

  .arrowDown {
    position: absolute;
    left: 48%;
    right: 50%;
    animation: upDown 1s infinite alternate;

    @media (max-width: 54rem) {
      left: 44%;
    }
  }

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .infos {
      color: var(--black);
      font: 400 3.2rem 'Open Sans', sans-serif;
      opacity: 0;
      animation: appear 2s 1.8s forwards;

      p {
        display: flex;
        align-items: center;
        justify-content: center;

        + p {
          margin-top: 0.8rem;
        }

        svg {
          color: var(--red-300);
          margin-right: 0.8rem;
        }
      }
    }

    img {
      max-width: 80%;
      margin-bottom: 4rem;
      animation: appearFromBottom 2s 0.8s forwards;
      opacity: 0;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font: 900 6.8rem/1.1 'Poppins', sans-serif;
      text-transform: uppercase;
      color: var(--black);
      animation: appearFromRight 2s 0.8s forwards;
      opacity: 0;
      margin-bottom: 5.6rem;
      text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
      letter-spacing: -1.3px;

      @media (max-width: 54rem) {
        animation: none;
        opacity: 1;
      }

      span {
        color: var(--red-400);
      }
    }

    .counterBox {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      width: 100%;
      color: var(--white);
      gap: 1.6rem;
      margin: 0 auto;
      max-width: 52rem;
      animation: appearFromBottom 2s 1.5s forwards;
      opacity: 0;

      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .itemTime {
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            122.48deg,
            var(--red-500) -4.86%,
            var(--red-300) 55.87%
          );
          border-radius: 8px;
          font-size: 6.4rem;
          font-weight: 400;
          font-family: 'Poppins', sans-serif;
          width: 100%;
          padding: 2.8rem 0;
          box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
        }

        p {
          font-size: 1.6rem;
          text-transform: uppercase;
          font-family: 'Poppins', sans-serif;
          margin-top: 1.4rem;
          color: var(--black);
        }
      }
    }
  }

  @media (max-width: 72rem) {
    grid-template-columns: none;
    grid-row-start: span;
    max-width: 100%;
  }

  @media (max-width: 54rem) {
    grid-template-columns: none;
    grid-row-start: span;
    margin-top: 2.4rem;
    gap: 6.4rem;

    .left {
      width: 90%;
      margin: 0 auto;
    }

    .right {
      .counterBox {
        width: 95%;
        margin-top: 4rem;

        .item .itemTime {
          font-size: 5rem;
        }
      }

      h1 {
        font-size: 4.8rem;
      }
    }
  }
`;

export const Investment = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4.8rem 0;

  ${Title}::before {
    width: 21.4rem;
    left: 10.8rem;
    letter-spacing: -1px;
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 5.6rem;
    gap: 4.8rem;
    max-width: 70%;
    margin: 0 auto;

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #b51b1b;
      color: var(--white);
      padding: 12rem 2.4rem;
      border-radius: 30px;
      transition: 0.3s;

      :hover {
        transform: translateY(-0.8rem);
      }

      + .card {
        background: var(--red-500);
      }

      :last-child {
        background: var(--red-600);
      }

      h3 {
        font-family: 'Poppins', sans-serif;
        font-size: 3.2rem;
        font-weight: 700;
        text-transform: uppercase;
        margin-top: 1.6rem;
        margin-bottom: 3.2rem;
        text-align: center;
        line-height: 1.2;
      }

      p {
        font-family: 'Open Sans', sans-serif;
        font-size: 2rem;
        text-align: center;
        line-height: 1.1;
        color: #f1f0f5;
      }

      .copiaCola {
        background: linear-gradient(90.58deg, #53b151 -4.83%, #3b8e39 97.01%);
        text-transform: uppercase;
        color: var(--black);
        font: 600 2rem 'Poppins', sans-serif;
        padding: 0.8rem 3.2rem;
        border-radius: 6px;
        margin-top: 2.4rem;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 54rem) {
    width: 90%;
    margin: 0 auto;

    ${Title} {
      text-align: center;
      max-width: 75%;

      ::before {
        width: 12.8rem;
        left: 7.2rem;
      }
    }

    .cards {
      grid-template-columns: none;
      max-width: 100%;
    }
  }
`;

export const InscriptionForm = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8rem auto;
  flex-direction: column;
  background: var(--white);
  max-width: 720px;
  padding: 4rem;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1), 0 0 16px rgba(0, 0, 0, 0.2);

  ${Title} p {
    font-size: 1.8rem;
    text-transform: none;
    color: #f88085;
  }

  form {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    button[type='submit'] {
      background: linear-gradient(90.58deg, #db021c -4.83%, #ff3d3d 97.01%);
      border-radius: 8px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 2.4rem;
      margin-top: 2.4rem;
      padding: 0.8rem 4rem;
      letter-spacing: -0.8px;
    }

    .buttons {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      position: relative;

      &.displayErrors::before {
        content: 'É obrigatório escolher uma resposta!';
        color: #f88085;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.8rem;
        position: absolute;
        right: 0;
      }
    }

    input[type='radio'] {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
      left: 0;
      top: 0;
    }

    .yes-active {
      background: #2d672c;
    }

    .no-active {
      background: #8f0011;
    }

    button {
      color: var(--white);
      text-transform: uppercase;
      font: 600 1.8rem 'Open Sans', sans-serif;
      padding: 1.4rem 4rem;
      border-radius: 5px;
      margin-right: 0.4rem;
      position: relative;
      cursor: pointer;
      transition: 0.3s;
    }

    button {
      background: #53b151;
    }

    button + button {
      background: #db021c;
    }

    .input {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      margin-bottom: 1.6rem;

      p {
        font-size: 1.8rem;
        font-family: 'Open Sans', sans-serif;
        margin: 0.4rem 0;
        color: var(--red-400);
        font-weight: 700;
        letter-spacing: -0.7px;
      }

      .displayErros {
        border: 1px solid var(--red-400);
      }

      label {
        color: var(--black);
        font: 400 1.8rem 'Open Sans', sans-serif;
        margin-bottom: 0.8rem;
      }

      input,
      select {
        border-radius: 5px;
        padding: 1.2rem 1.2rem;
        font-size: 1.8rem;
        color: var(--black);
        border: 1px solid #ccc;
      }

      .age {
        max-width: 30%;
      }

      .whats {
        display: flex;
        align-items: center;
        margin-top: 1.6rem;

        input {
          min-width: 2.4rem;
          min-height: 2.4rem;
          margin-right: 0.8rem;
          margin-bottom: 0.8rem;
        }

        label {
          display: flex;
          align-items: center;

          svg {
            margin-left: 0.4rem;
          }
        }
      }
    }
  }

  @media (max-width: 54rem) {
    form {
      width: 90%;
    }
  }
`;

export const Footer = styled.footer`
  background-color: #2a2a2c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.6rem 12rem;
  box-shadow: inset 0px 7px 6px rgba(0, 0, 0, 0.25);

  .images img + img {
    margin-left: 2.4rem;
  }

  p {
    font: 400 1.6rem 'Open Sans', sans-serif;
    color: var(--white);
  }

  @media (max-width: 54rem) {
    flex-direction: column;

    padding: 2.4rem 0;

    p {
      margin: 2.4rem 0;
    }
  }
`;
