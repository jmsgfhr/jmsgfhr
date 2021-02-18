/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import Head from 'next/head';
import db from '../db.json';
import LogoImg from '../src/assets/images/Logo.svg';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    margin-top: 80px;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
  }
  html, body {
    min-height: 100vh;
  }
  html{
    scroll-padding-top: 80px;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{db.title}</title>
        <link rel="shortcut icon" href={LogoImg} />
        <meta httpEquiv="content-language" content="pt-br" />
        <meta name="description" content={db.description} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
