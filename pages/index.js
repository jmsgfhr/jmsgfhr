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

export default function Home() {
  return (
    <BoxContent>
      <Header />
      <HomePresentation />
    </BoxContent>
  );
}
