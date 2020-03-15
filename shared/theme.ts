import { black, red, blue } from 'shared/colors';

export const defaultTheme = {
  textColor: black.dark,
  chipColor: blue[500],
  primary: 'green',
  favoriteColor: red.dark,
  chipBGColor: blue[50],
};

export type ThemeType = typeof defaultTheme;
