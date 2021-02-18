import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LogoWhite from '../../assets/images/LogoWhite.svg';

const BoxContainer = styled.div`
    width: 100vw;
    height: 800vh;
    background-color: #4AFFFF;
    overflow: hidden;
    z-index: 3;
    visibility: ${(props) => props.visible};
`;

const LogoImg = styled.img`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(${(props) => props.scale});
    transition: .3s;
    z-index: 3;
`;

export default function HomePresentation() {
  const [scrollScale, setScrollScale] = useState(1);
  const [visible, setVisible] = useState('visible');

  function logit() {
    if (window.pageYOffset / 100 > 1 && window.pageYOffset / 100 < 46) {
      setScrollScale(parseInt(window.pageYOffset / 100, 10));
      setVisible('visible');
    } else if (window.pageYOffset / 100 < 1) setScrollScale(1);
    else setVisible('hidden');
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', logit);
    };
  });

  return (
    <BoxContainer visible={visible}>
      <LogoImg src={LogoWhite} alt="logo" scale={scrollScale} />
    </BoxContainer>
  );
}
