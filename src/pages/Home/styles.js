import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const InputSearchContainer = styled.div`
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

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;

  strong {
    color: ${({ theme }) => theme.colors.gray['900']};
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
    padding: 8px 16px;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    transition: all .2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListHeader = styled.header`
  margin-top: 24px;

  margin-bottom: 8px;

  button {
  background: transparent;
  border: none;
  display: flex;
  align-items: center;

    span {
      font-size: 16px;
      font-weight: bold;
      margin-right: 8px;
      color: ${({ theme }) => theme.colors.primary.main}
    }

    img {
      transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)')};
      transition: transform ease-in .2s;
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 16px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px 8px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      margin-top: 4px;
      color: ${({ theme }) => theme.colors.gray['200']}
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;
