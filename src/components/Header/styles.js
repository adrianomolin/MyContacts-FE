import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 74px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputSearchContainer = styled.div`
  margin-top: 48px;
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    background: #fff;

    border: none;
    outline: 0;
    padding: 16px;
    border-radius: 25px;

    filter: drop-shadow(${({ theme }) => theme.boxShadow});

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray['200']};
    }
  }
`;
