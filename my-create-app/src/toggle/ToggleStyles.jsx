import styled from 'styled-components';

export const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.toggleBackground};
  color: ${({ theme }) => theme.toggleColor};
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.toggleBackgroundHover};
  }
`;
