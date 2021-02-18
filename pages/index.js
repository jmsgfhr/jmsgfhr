import React from 'react';
import styled from 'styled-components';
import Header from '../src/components/Header';
import HomePresentation from '../src/components/HomePresentation';

const BoxContent = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
`;

const HeroContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
`;

const HeroText = styled.h1`
  font-size: 3rem;
  display: block;
  margin: 5px 0;
`;

HeroText.Subtitle = styled.h2`
  font-size: 1.5rem;
  display: block;
  width: 50vw;
  text-align: center;
  margin: 5px 0;
`;

export default function Home() {
  return (
    <BoxContent>
      <Header />
      <HomePresentation />
      <HeroContainer>
        <HeroText>Jonathan Meirelles</HeroText>
        <HeroText.Subtitle>
          Sou Desenvolvedor Front-End, estudante de Computação na UFF e gosto de novas tecnologias
        </HeroText.Subtitle>
      </HeroContainer>
    </BoxContent>
  );
}
