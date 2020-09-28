import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::before, ::after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

  body {
    color: ${props => props.theme.primaryTextColor};
    font-family: ${props => props.theme.fontFamily};
    background: linear-gradient(to top, ${props => props.theme.primaryColor}, ${props => props.theme.blue200});
  }

  a {
    color: inherit;
  }
`;