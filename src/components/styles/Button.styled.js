import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ bgColor }) => bgColor || '#fff'};
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  border: 0px;
  border-radius: 20px;
  padding: 10px 42px;
  color: ${({ color }) => color || '#333'};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export default Button;
