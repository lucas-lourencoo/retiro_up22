import styled from 'styled-components';

interface ButtonUpProps {
  showButton: boolean;
}

const ButtonUp = styled.div<ButtonUpProps>`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
  }

  position: fixed;
  bottom: 3rem;
  right: 5rem;
  align-items: center;
  font-size: 4rem;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  transition: opacity 0.2s;
  opacity: 0.5;
  color: var(--blue);
  display: ${(props) => (props.showButton ? 'flex' : 'none')};

  &:hover {
    opacity: 1;
  }

  @media (max-width: 72rem) {
    right: 0.8rem;
    bottom: 2.4rem;
  }
`;

export default ButtonUp;
