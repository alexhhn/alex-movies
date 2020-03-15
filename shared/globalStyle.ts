import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { primaryFont, typeScale } from './typography';
import { black } from 'shared/colors';
import { ThemeType } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${normalize()}

  :root {
    font-size: 62.5%;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin-top: 0;
  }

  body {
    margin: 0;
    padding: 24px;
    font-family: ${primaryFont};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem;
    color: ${props => props.theme.textColor} 
  }

  h2 { 
    font-size: ${typeScale.header2}
  }

  pre {
    font-family: ${primaryFont};
    font-size: ${typeScale.helperText}

  }

`;
