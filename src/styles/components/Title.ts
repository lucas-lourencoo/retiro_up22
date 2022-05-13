import styled from 'styled-components';

const Title = styled.h2`
  font: 600 4rem 'Poppins', sans-serif;
  color: var(--black);
  text-transform: uppercase;
  margin-bottom: 4rem;
  position: relative;
  display: inline-block;
  text-align: center;

  ::before {
    content: '';
    position: absolute;
    height: 0.6rem;
    background: linear-gradient(88deg, #990c0c -4.99%, #d45f5f 108.86%);
    bottom: -0.4rem;
    right: 0rem;
  }

  span {
    color: var(--blue-lighter);
  }

  @media (max-width: 54rem) {
    font-size: 2.6rem;
  }
`;

export default Title;
