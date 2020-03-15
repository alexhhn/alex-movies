import { black, red } from 'shared/colors';

export const defaultTheme = {
  textColor: black.dark,
  primary: 'green',
  favoriteColor: red.dark,
};

export type ThemeType = typeof defaultTheme;
