import React from 'react';
import styled from 'styled-components';
import Button from '../Buttons';
import Container from '../Container';

const Nav = styled.div`
    width: 100%;
    height: 80px;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
    width: 80px;
    height: 80px;
`;

export default function Header() {
  return (
    <Nav>
      <Container>
        <Logo />
        <Container style={{ width: '330px', margin: '0' }}>
          <Button>Portfolio</Button>
          <Button>Sobre</Button>
          <Button>Contato</Button>
        </Container>
      </Container>
    </Nav>
  );
}
