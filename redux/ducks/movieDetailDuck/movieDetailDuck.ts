const SET_MOVIE_DETAIL = 'SET_MOVIE_DETAIL';

export const initialState: MovieDetailState = {
  data: undefined,
};

export default function MovieDetailReducer(state = initialState, action: Action): MovieDetailState {
  switch (action.type) {
    case SET_MOVIE_DETAIL:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

// Actions
export const setMovieDetail = (payload: IMovie) => ({
  type: SET_MOVIE_DETAIL,
  payload,
});
