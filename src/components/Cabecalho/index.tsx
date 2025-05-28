import React from 'react';
import { Container, Logo, Nav } from './styles';

const Header: React.FC = () => (
  <Container>
    <Logo>EBAC Jobs</Logo>
    <Nav>
      <a href="#home">Home</a>
      <a href="#vagas">Vagas</a>
      <a href="#contato">Contato</a>
    </Nav>
  </Container>
);

export default Header;
