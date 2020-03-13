import { Action } from '../redux-types';
import axios from 'axios';

// Actions
const SET_MOVIES = 'SET_MOVIES';

interface MovieState {
  name: string;
}

type DispatchType = (arg: Action) => Action;

export const initialState: MovieState = { name: 'blah blah' };

export default function UserReducer(state = initialState, action: Action): MovieState {
  switch (action.type) {
    case SET_MOVIES:
      return action.payload;
    default:
      return state;
  }
}

export const fetchMovies = () => async (dispatch: DispatchType) => {
  const response = await axios.get('/data');
  console.log('response :', response);
  const fakeRes = { name: 'bbe' };
  dispatch({
    type: SET_MOVIES,
    payload: fakeRes,
  });
};
