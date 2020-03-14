import { Action } from '../redux-types';
import axios from 'axios';

// Actions
const SET_MOVIES = 'SET_MOVIES';

type DispatchType = (arg: Action) => Action;

export const initialState: MovieState = { data: [] };

export default function UserReducer(state = initialState, action: Action): MovieState {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export const fetchMovies = () => async (dispatch: DispatchType) => {
  try {
    const res = await axios.get('/data');
    console.log('response :', res);
    dispatch({
      type: SET_MOVIES,
      payload: res.data,
    });
  } catch (err) {
    console.error('error :', err);
  }
};

// Actions
export const setMovies = (payload: IMovie[]) => {
  return {
    type: SET_MOVIES,
    payload: payload,
  };
};

// Utils function
export const fetchM = async () => {
  try {
    const res = await axios.get('/data');
    return res;
  } catch (err) {
    console.error('error :', err);
  }
};
