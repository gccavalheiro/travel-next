import { createGlobalStyle } from 'styled-components'

import theme from './theme/theme'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.font.family.bodyFont};
    font-size: ${theme.font.sizes.normal};
    background-color: ${theme.colors.body};
    margin: ${theme.header.height} 0 0 0;
    color: ${theme.colors.text};
  }

  h1,h2,h3 {
    color: ${theme.colors.title};
    font-weight: ${theme.font.weights.semiBold};
    font-family: ${theme.font.family.titleFont};
  }

  ul {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  img, video {
    max-width: 100%;
    height: auto;
  }

  button, input {
    border: none;
    font-family: ${theme.font.family.bodyFont};
    font-size: ${theme.font.sizes.normal};
  }

  button {
    cursor: pointer;
  }

  input {
    outline: none;
  }

  .section {
    padding: 4.5rem 0 2.5rem;
  }

  .section-title {
    font-size: ${theme.font.sizes.h2};
    color: ${theme.colors.title};
    text-align: center;
    text-transform: uppercase;
    margin-bottom: ${theme.spacings.mb2};
  }

  .swiper {
    width: 100%;
  }

  ::-webkit-scrollbar{
    width: .60rem;
    background-color: ${theme.colors.scrollBar};
  }

  ::-webkit-scrollbar-thumb{
    border-radius: 12px;
    background-color: ${theme.colors.scrollBarThumb};
  }

`
export default GlobalStyles
