import { combineReducers } from 'redux';
import movieReducer, { initialState as movieState } from './movieDuck';

export const initialState = {
  movies: movieState,
};

export default combineReducers({
  movies: movieReducer,
});
