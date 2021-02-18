import React from 'react';
import styled from 'styled-components';
import Button from '../Buttons';
import Container from '../Container';
import LogoImg from '../../assets/images/Logo.svg';

const Nav = styled.div`
    width: 100%;
    height: 80px;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`;

const LogoLink = styled.a`
    width: 50px;
    height: 50px;
`;

const Logo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export default function Header() {
  return (
    <Nav>
      <Container>
        <LogoLink href="#">
          <Logo src={LogoImg} alt="Logo do site" />
        </LogoLink>
        <Container style={{ width: '330px', margin: '0' }}>
          <Button>Portfolio</Button>
          <Button>Sobre</Button>
          <Button>Contato</Button>
        </Container>
      </Container>
    </Nav>
  );
}
