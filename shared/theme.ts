import { black, red, blue, dark, grey, white } from 'shared/colors';

export const defaultTheme = {
  backgroundColor: white.default,
  textColor: black.dark,
  favoriteColor: red.dark,
  favoriteColorHover: red.darker,
  chipBGColor: '#e0e0e0',
  chipBGColorHover: grey.light,
  chipSelectedColor: blue[500],
  chipSelectedBGColor: blue[50],
  chipSelectedBGColorHover: blue[100],
  interactionColor: blue[700],
  borderColor: grey.light,
  cardBGColor: grey.veryLight,
  descriptionColor: grey.dark,
};

export const darkTheme = {
  backgroundColor: dark.light,
  textColor: dark.white,
  favoriteColor: red.dark,
  favoriteColorHover: red.darker,
  chipBGColor: dark.black,
  chipBGColorHover: dark.light,
  chipSelectedColor: red.dark,
  chipSelectedBGColor: dark.black,
  chipSelectedBGColorHover: blue[100],
  interactionColor: red.dark,
  borderColor: grey.veryLight,
  cardBGColor: dark.black,
  descriptionColor: dark.white,
};

export type ThemeType = typeof defaultTheme;
