import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --white: #fff;

  --gray-100: #e1e1e6;
  --gray-200: #d1d1d6;
  --gray-300: #b6b6c2;
  --gray-400: #8e8e9c;
  --gray-500: #63637a;
  --gray-600: #3d3d4f;
  --gray-700: #1a1a26;
  --gray-800: #0d0d12;
  --gray-850: #1f2729;
  --gray-900: #000000;

  --cyan-500: #61dafb;
  --cyan-600: #54c7f7;
  --cyan-700: #47b5f5;
  --cyan-800: #3daef3;
  --cyan-900: #2d98f1;

  --yellow-500: #fce858;
}
body {
  background: var(--gray-900);
  color: var(--white);
}

body,
input,
textarea,
select,
button {
  font: 400 1rem 'Roboto', sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

`
