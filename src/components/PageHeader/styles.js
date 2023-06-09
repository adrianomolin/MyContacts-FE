import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 24px;

  a {
    width: 24px;
    display: flex;
    align-items: center;
    text-decoration: none;

    img {
      margin-right: 8px;
      transform: rotate(-90deg);
    }

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }
  }

  h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.gray['900']}
  }
`;
