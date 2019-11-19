import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --color-grey-dark-1: #414a55;

  --color-grey-light-1: #eef3f6;
  --color-grey-light-2: #d1d3d9;
  --color-grey-light-3: #cfd5da;

  --color-red-1: #ff5559;

  --color-overlay-white: #ffffff80;
}

* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

body {
  font-family: 'Noto Sans TC', sans-serif;
  background-color: var(--color-grey-light-1);
  color: var(--color-grey-dark-1);
}
`;
