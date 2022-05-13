import styled from 'styled-components';

export const Confirmation = styled.div`
  @keyframes fromtop {
    from {
      opacity: 0;
      transform: translateY(-0.7rem);
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes appear {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;

  svg {
    color: var(--green);
    margin-bottom: 3.2rem;
    opacity: 0;
    animation: fromtop 0.5s 0.6s forwards ease-in-out;

    polyline {
      opacity: 0;
      animation: fromtop 0.5s 1s forwards ease-in-out;
    }
  }

  h1 {
    font: 700 3rem 'Poppins', sans-serif;
    text-transform: uppercase;
    color: var(--black);
    margin-bottom: 1.6rem;
    opacity: 0;
    animation: fromtop 0.5s 0.8s forwards ease-in-out;
  }

  p {
    line-height: 1.4;
    font-size: 1.8rem;
    color: var(--black);
    font-family: 'Open Sans', sans-serif;
    opacity: 0;
    animation: fromtop 0.5s 1s forwards ease-in-out;
  }

  button {
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--white);
    text-transform: uppercase;
    font: 500 1.8rem 'Poppins', sans-serif;
    padding: 1.2rem 4rem;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
    background: linear-gradient(90.58deg, #db021c -4.83%, #ff3d3d 97.01%);
    margin-top: 1.6rem;
    opacity: 0;
    animation: fromtop 0.5s 1.2s forwards ease-in-out;
    transition: 0.3s;

    :hover {
      transform: translateY(-0.8rem);
    }
  }

  a {
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--white);
    text-transform: uppercase;
    font: 500 1.8rem/1.2 'Poppins', sans-serif;
    padding: 1.2rem 4rem;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
    background: linear-gradient(122.48deg, #2989e8 -4.86%, #1365b5 55.87%);
    margin-top: 3.6rem;
    opacity: 0;
    animation: fromtop 0.5s 1.2s forwards ease-in-out;
    transition: 0.3s;

    :hover {
      transform: translateY(-0.8rem);
    }
  }

  @media (max-width: 54rem) {
    width: 100%;
    text-align: center;
    padding: 3.2rem 1.6rem;

    svg {
      margin-bottom: 2.4rem;
    }

    h1 {
      font-size: 3.2rem;
      margin-bottom: 2.4rem;
      line-height: 1.1;
    }

    p {
      font-size: 1.8rem;
      line-height: 1.4;
      margin-bottom: 0.8rem;
    }
  }
`;
