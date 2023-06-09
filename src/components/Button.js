import styled, { css } from 'styled-components';

export default styled.button`
  background: ${({ theme }) => theme.colors.primary.main};
  border: none;
  padding: 0 16px;
  border-radius: 4px;
  height: 52px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;

  transition: background .2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: ${({ theme }) => theme.colors.gray['100']};
    cursor: not-allowed;
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.main};

    transition: background .2s ease-in;

    &:hover {
      background: ${theme.colors.danger.light};
    }

    &:active {
      background: ${theme.colors.danger.dark};
    }
  `}
`;
