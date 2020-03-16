// Actions constant
const TOGGLE_STATE = 'TOGGLE_STATE';
const SET_SHOW_FAVORITE = 'SET_SHOW_FAVORITE';

export const initialState: UserState = {
  favorites: [],
  showFavorites: false,
};

export default function UserReducer(state = initialState, action: Action): UserState {
  switch (action.type) {
    case SET_SHOW_FAVORITE:
      return { ...state, showFavorites: !state.showFavorites };
    case TOGGLE_STATE:
      return {
        ...state,
        favorites: state.favorites.includes(action.payload)
          ? state.favorites.filter(movieId => movieId !== action.payload)
          : [...state.favorites, action.payload],
      };
    default:
      return state;
  }
}

export const toggleFavorite = (movieId: number) => ({
  type: TOGGLE_STATE,
  payload: movieId,
});

export const setShowFavorite = () => ({
  type: SET_SHOW_FAVORITE,
});
