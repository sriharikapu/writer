import { createGlobalStyle } from 'styled-components'
import createMediaQueries from 'util/media-query'

// Colors
export const color = {
  background: '#324a5e',
  primary: '#3498db',
  success: '#2ecc71',
  danger: '#e74c3c',
  warning: '#f1c40f',
  grey: '#e1e1e1',
  green1: '#CEED74',
  green2: '#77B796',
  purple1: '#8377B7',
  pink1: '#D06AF4',
  blue1: '#466D94',
  black1: '#181717'
}

export const sizes = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1280
}

export const media = createMediaQueries(sizes)

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'AvenirNext-Bold';
    src: local('AvenirNext-Bold'), url(fonts/AvenirNextLTPro-Bold.otf) format('truetype');
  }
  
  @font-face {
    font-family: 'AvenirNext-Regular';
    src: local('AvenirNext-Regular'), url(fonts/AvenirNextLTPro-Regular.otf) format('truetype');
  }
  
  html {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: rgb(1, 1, 1);
    scroll-behavior: smooth;
  }
  
  body {
    background: linear-gradient(#3E3E3E 0%, #202020 45%);
  }
  
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .text-blue {
    color: #7486ED;
  }
  
  .text-green {
    color: #ABED74;
  }
  
  .text-red {
    color: #ED9174;
  }
`
