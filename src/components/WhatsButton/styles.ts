import styled from 'styled-components';

export const Button = styled.a`
  @keyframes grow {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }

  position: fixed;
  left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  color: #fff;
  border: 1px solid #fff;
  z-index: 20;
  background: #5db4a7;
  padding: 8px;
  border-radius: 30px;
  font-size: 24px;
  animation-fill-mode: forwards;
  animation: grow 1s infinite alternate ease;

  @media (max-width: 72rem) {
    left: 4px;
    padding: 6px;
    font-size: 20px;
  }
`;
