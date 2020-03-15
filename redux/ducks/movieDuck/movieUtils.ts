import axios from 'axios';
import utils from 'shared/utils';
import _orderBy from 'lodash/orderBy';

import { SortValuesIds } from 'shared/constants';

export const fetchMovies = async () => {
  try {
    const res = await axios.get('/data');
    // Translate data to readable fields
    // It *might* be better to get these field from back-end
    const data = res.data.map((element: IMovie) => {
      return {
        ...element,
        rating: utils.getAverageRatings(element.ratings),
        duration: utils.convertPlayTime(element.duration),
      };
    });

    return data;
  } catch (err) {
    console.error('error :', err);
    return undefined;
  }
};

export const movieHasCategory = (movie: IMovie, selectedCategories: string[]) => {
  let res = false;
  selectedCategories.forEach(element => {
    if (movie.genres.includes(element)) {
      console.log('movies.genres', movie.genres);
      res = true;
    }
  });
  return res;
};

export const getSortedMovies = (movies: IMovie[], sortByItemId: string) => {
  let result;
  switch (sortByItemId) {
    case SortValuesIds.acsendingId:
      result = _orderBy(movies, 'title', ['asc']);
      break;
    case SortValuesIds.descendingId:
      result = _orderBy(movies, 'title', ['desc']);
      break;
    case SortValuesIds.ratingLowId:
      result = _orderBy(movies, 'rating', ['asc']);
      break;
    case SortValuesIds.ratingHighId:
      result = _orderBy(movies, 'rating', ['desc']);
      break;
    case SortValuesIds.imdbRatingLowId:
      result = _orderBy(movies, 'imdbRating', ['asc']);
      break;
    case SortValuesIds.imdbRatingHighId:
      result = _orderBy(movies, 'imdbRating', ['desc']);
      break;
    case SortValuesIds.durationLowId:
      result = _orderBy(movies, 'duration', ['asc']);
      break;
    case SortValuesIds.durationHighId:
      result = _orderBy(movies, 'duration', ['desc']);
      break;
    case SortValuesIds.yearLowId:
      result = _orderBy(movies, 'year', ['asc']);
      break;
    case SortValuesIds.yearHighId:
      result = _orderBy(movies, 'year', ['desc']);
      break;
    default:
      result = movies;
  }
  return result;
};
