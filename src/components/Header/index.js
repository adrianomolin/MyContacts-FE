import { Container, InputSearchContainer } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" width="201" />

      <InputSearchContainer>
        <input placeholder="Pesquisar contato..." type="text" />
      </InputSearchContainer>
    </Container>
  );
}