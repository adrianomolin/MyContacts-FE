import styled from 'styled-components';

export default styled.input`
  width: 100%;
  background: #fff;
  border: 2px solid #fff;
  border-radius: 4px;
  height: 52px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  outline: none;
  padding: 0 16px;
  font-size: 16px;

  transition: border-color ease-in .2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main}
  }
`;
