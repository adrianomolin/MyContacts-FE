import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 450px;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.gray['900']
  )}
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 32px;

  .cancel-button {
    background: transparent;
    border: none;
    padding: 0 16px;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.gray['200']}
  }
`;
