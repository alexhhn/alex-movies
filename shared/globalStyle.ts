import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { primaryFont, typeScale, typeScaleMobile } from './typography';
import { ThemeType } from './theme';
import devices from './media';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${normalize()}

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin-top: 0;
  }

  body {
    margin: 0;
    font-family: ${primaryFont};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    //* Default all font size to be 1rem, normally 16px
    font-size: 1rem;
    color: ${props => props.theme.textColor} ;
  }

  h1 {
    font-size: ${typeScale.header1};
    font-weight: 300;
  }

  h2 { 
    font-size: ${typeScale.header2}
  }

  @media ${devices.mobileOnly} {
    h1 {
      font-size: ${typeScaleMobile.header1};
      font-weight: 300;
    }
   }

  h1,h2,h3,h4,h5 {
    margin-top: 0;
  }

  pre {
    font-family: ${primaryFont};
    font-size: ${typeScale.helperText}
  }

  button {
    border: none;
    cursor: pointer;
    padding: 0;
    color: ${props => props.theme.interactionColor};
    text-decoration: underline;
  }

`;
