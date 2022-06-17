import styled from 'styled-components';

interface HeaderProps {
  isActive: boolean;
}

export const HeaderLayout = styled.header<HeaderProps>`
  @keyframes light {
    from {
      filter: none;
    }
    to {
      filter: brightness(125%);
    }
  }

  button {
    display: none;
  }

  width: 100%;
  position: ${(props) => (props.isActive ? 'sticky' : 'relative')};
  top: ${(props) => props.isActive && '-0.4rem'};
  box-shadow: ${(props) => props.isActive && '0 2px 6px rgba(0,0,0,.7)'};
  z-index: 10;

  ${(props) =>
    props.isActive &&
    `::before {
    content: '';
    background: var(--black);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
  }`};

  .menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 80%;
    margin: 0 auto;
    padding: 1.6rem 0;

    img {
      max-height: 6.4rem;
      filter: ${(props) => !props.isActive && `invert() brightness(10000%)`};
    }

    .navItem {
      .navLink {
        color: var(--white);
        font: 500 1.8rem 'Open Sans', sans-serif;
        margin-right: 2.4rem;
        text-rendering: optimizeLegibility;
        cursor: pointer;
        text-transform: uppercase;
        transition: filter 0.3s;
        letter-spacing: -0.5px;

        :hover {
          filter: brightness(80%);
        }
      }

      .navLinkButton {
        color: var(--black);
        font: 700 1.8rem 'Open Sans', sans-serif;
        background: linear-gradient(90.58deg, #53b151 -4.83%, #3b8e39 97.01%);
        padding: 0.8rem 2.4rem;
        text-transform: uppercase;
        text-rendering: optimizeLegibility;
        animation: light 0.5s 1s infinite alternate ease;
        cursor: pointer;
        border-radius: 6px;
      }
    }
  }

  @media (max-width: 54rem) {
    .menu {
      max-width: 90%;

      button {
        display: flex;
        color: var(--white);
        font-size: 3.2rem;
      }

      img {
        max-height: 4rem;
      }
    }

    nav {
      display: none;
    }
  }
`;

export const MenuCel = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    .navItem {
      .navLink {
        color: var(--black);
        font: 400 1.8rem 'Open Sans', sans-serif;
        text-rendering: optimizeLegibility;
        transition: 0.3s;
        margin-top: 1.6rem;
        cursor: pointer;
        display: inline-block;

        :hover {
          color: #d6d6d6;
        }
      }

      .navLinkButton {
        color: var(--white);
        font: 700 1.6rem 'Open Sans', sans-serif;
        background: linear-gradient(90.58deg, #db021c -4.83%, #ff3d3d 97.01%);
        border-radius: 15px;
        padding: 1.2rem 2.4rem;
        text-transform: uppercase;
        text-rendering: optimizeLegibility;
        animation: light 1s 1s infinite alternate ease;
        cursor: pointer;
        margin-top: 2.4rem;
        display: inline-block;
      }
    }
  }
`;
