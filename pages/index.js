import React from 'react';
import styled from 'styled-components';
import Header from '../src/components/Header';
import db from '../db.json';
import Container from '../src/components/Container';

const BoxContent = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const HomePresentation = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-image: url(${db.bg});
  overflow: hidden;
`;

const PresentationTextWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  display: flex;
  z-index: 0;

  &>svg{
    transform:scale(2);
    margin: 0 auto;
  }
`;
const PresentationTitle = styled.h1`
  display:block;
  z-index:1;
  font-size: 7rem;
  text-shadow: 4px 4px #ffffff;
  margin:0;
`;

const PresentationSubTitle = styled.h2`
  display:block;
  z-index:1;
  font-size: 2rem;
  text-shadow: 4px 4px #ffffff;
  margin:0;
  width: 600px;
  text-align: center;
`;

export default function Home() {
  return (
    <BoxContent>
      <Header />
      <HomePresentation>
        <Container style={{
          position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        }}
        >
          <PresentationTextWrapper>
            <svg width="320" height="209" viewBox="0 0 320 209" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0)">
                <g filter="url(#filter0_d)">
                  <path d="M123.163 194.906L320.039 0.614962L0 44.9664L123.163 194.906Z" fill="#4AFFFF" />
                  <path d="M123.163 194.906L320.039 0.614962L0 44.9664L123.163 194.906Z" fill="url(#paint0_linear)" />
                </g>
              </g>
              <defs>
                <filter id="filter0_d" x="0" y="0" width="348.002" height="213.976" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="5" dy="5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <linearGradient id="paint0_linear" x1="239" y1="73.9664" x2="16" y2="76.9664" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4AFFFF" />
                  <stop offset="1" stopColor="#FF4ACC" />
                </linearGradient>
                <clipPath id="clip0">
                  <rect width="320" height="209" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </PresentationTextWrapper>
          <PresentationTitle>Olá,</PresentationTitle>
          <PresentationSubTitle>
            eu sou Jonathan Meirelles, programador Front-End.
          </PresentationSubTitle>
        </Container>
      </HomePresentation>
    </BoxContent>
  );
}
