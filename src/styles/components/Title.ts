import styled from 'styled-components';

const Title = styled.h2`
  font: 600 4rem 'Poppins', sans-serif;
  color: var(--white);
  text-transform: uppercase;
  margin-bottom: 4rem;
  position: relative;
  display: inline-block;
  text-align: center;

  ::before {
    content: '';
    position: absolute;
    height: 0.6rem;
    background: linear-gradient(88deg, #f75959 -4.99%, #f98989 108.86%);
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
