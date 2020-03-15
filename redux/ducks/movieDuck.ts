import axios from 'axios';
import { Action } from '../redux-types';
import utils from 'shared/utils';
import _union from 'lodash/union';
import _reduce from 'lodash/reduce';
// Actions
const SET_MOVIES = 'SET_MOVIES';
const SET_CATEGORIES = 'SET_CATEGORIES';

export const initialState: MovieState = { data: [], categories: [] };

export default function UserReducer(state = initialState, action: Action): MovieState {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, data: action.payload };
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}

// Actions
export const setMovies = (payload: IMovie[]) => ({
  type: SET_MOVIES,
  payload,
});

// Utils function
export const fetchMovies = async () => {
  try {
    const res = await axios.get('/data');
    // console.log('res', ...res);

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

export const getCategories = (movies: IMovie[]) => {
  let res: string[] = [];
  movies.forEach((element: IMovie) => {
    res = _union(res, element.genres);
  });

  res = res.map((item, i) => {
    return Object.assign({ id: i, name: item, isSelected: false });
  });

  return {
    type: SET_CATEGORIES,
    payload: res,
  };
};
