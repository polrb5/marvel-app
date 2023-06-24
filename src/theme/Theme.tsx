import { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './themeProps.ts';

type ThemeProps = {
  children: ReactNode;
}

const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
