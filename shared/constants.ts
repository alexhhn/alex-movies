export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://movies-api-alex.herokuapp.com/'
    : 'http://localhost:3000';
