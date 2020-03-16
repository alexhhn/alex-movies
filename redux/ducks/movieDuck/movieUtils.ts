import axios from 'axios';
import utils from 'shared/utils';
import _orderBy from 'lodash/orderBy';

import { sortValuesIds } from 'shared/constants';

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

export const getSortedMovies = (movies: IMovie[], sortByItemId: string) => {
  let result;
  switch (sortByItemId) {
    case sortValuesIds.acsendingId:
      result = _orderBy(movies, 'title', ['asc']);
      break;
    case sortValuesIds.descendingId:
      result = _orderBy(movies, 'title', ['desc']);
      break;
    case sortValuesIds.ratingLowId:
      result = _orderBy(movies, 'rating', ['asc']);
      break;
    case sortValuesIds.ratingHighId:
      result = _orderBy(movies, 'rating', ['desc']);
      break;
    case sortValuesIds.imdbRatingLowId:
      result = _orderBy(movies, 'imdbRating', ['asc']);
      break;
    case sortValuesIds.imdbRatingHighId:
      result = _orderBy(movies, 'imdbRating', ['desc']);
      break;
    case sortValuesIds.durationLowId:
      result = _orderBy(movies, 'duration', ['asc']);
      break;
    case sortValuesIds.durationHighId:
      result = _orderBy(movies, 'duration', ['desc']);
      break;
    case sortValuesIds.yearLowId:
      result = _orderBy(movies, 'year', ['asc']);
      break;
    case sortValuesIds.yearHighId:
      result = _orderBy(movies, 'year', ['desc']);
      break;
    default:
      result = movies;
  }
  return result;
};
