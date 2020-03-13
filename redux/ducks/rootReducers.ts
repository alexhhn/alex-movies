import { combineReducers } from 'redux';
import movieReducer, { initialState as movieState } from './movieDuck';

export const initialState = {
  movieReducer: movieState,
};

export default combineReducers({
  movieReducer,
});
