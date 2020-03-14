import axios from 'axios';
import { Action } from '../redux-types';

// Actions
const SET_MOVIES = 'SET_MOVIES';

export const initialState: MovieState = { data: [] };

export default function UserReducer(state = initialState, action: Action): MovieState {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, data: action.payload };
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
    return res;
  } catch (err) {
    console.error('error :', err);
    return undefined;
  }
};
