import { black, red, blue } from 'shared/colors';

export const defaultTheme = {
  textColor: black.dark,
  chipColor: blue[500],
  favoriteColor: red.dark,
  favoriteColorHover: red.darker,
  chipBGColor: blue[50],
  chipBGColorHover: blue[100],
  interactionColor: blue[700],
};

export type ThemeType = typeof defaultTheme;
