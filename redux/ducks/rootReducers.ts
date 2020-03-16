import { combineReducers } from 'redux';
import movieReducer, { initialState as movieState } from './movieDuck/movieDuck';
import movieDetailReducer, {
  initialState as movieDetailState,
} from './movieDetailDuck/movieDetailDuck';
import userReducer, { initialState as userState } from './userDuck/userDuck';

export const initialState = {
  movies: movieState,
  user: userState,
  movieDetail: movieDetailState,
};

export default combineReducers({
  movies: movieReducer,
  user: userReducer,
  movieDetail: movieDetailReducer,
});
