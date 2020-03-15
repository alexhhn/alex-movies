export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://movies-api-alex.herokuapp.com/'
    : 'http://localhost:3000';

const ACSENDING_ID = 'az';
const DECSENDING_ID = 'za';
const RATING_LOW_ID = 'ratingL';
const RATING_HIGH_ID = 'ratingH';
const IMDB_RATING_LOW_ID = 'imdbL';
const IMDB_RATING_HIGH_ID = 'imdbH';
const DURATION_LOW_ID = 'durationL';
const DURATION_HIGH_ID = 'durationH';
const YEAR_LOW_ID = 'yearL';
const YEAR_HIGH_ID = 'yearH';

export const sortValues = [
  { id: ACSENDING_ID, property: 'A - Z' },
  { id: DECSENDING_ID, property: 'Z - A' },
  { id: RATING_LOW_ID, property: 'Rating - Lowest' },
  { id: RATING_HIGH_ID, property: 'Rating - Highest' },
  { id: IMDB_RATING_LOW_ID, property: 'IMDB Rating - Lowest' },
  { id: IMDB_RATING_HIGH_ID, property: 'IMDB Rating - Highest' },
  { id: DURATION_LOW_ID, property: 'Duration - Shortest' },
  { id: DURATION_HIGH_ID, property: 'Duration - Longest' },
  { id: YEAR_LOW_ID, property: 'Year - Lowest' },
  { id: YEAR_HIGH_ID, property: 'Year - Higest' },
];

export const sortValuesIds = {
  acsendingId: ACSENDING_ID,
  descendingId: DECSENDING_ID,
  ratingLowId: RATING_LOW_ID,
  ratingHighId: RATING_HIGH_ID,
  imdbRatingLowId: IMDB_RATING_LOW_ID,
  imdbRatingHighId: IMDB_RATING_HIGH_ID,
  durationLowId: DURATION_LOW_ID,
  durationHighId: DURATION_HIGH_ID,
  yearLowId: YEAR_LOW_ID,
  yearHighId: YEAR_HIGH_ID,
};
