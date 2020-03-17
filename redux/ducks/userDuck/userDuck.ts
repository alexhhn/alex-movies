const TOGGLE_STATE = 'TOGGLE_STATE';
const SET_SHOW_FAVORITE = 'SET_SHOW_FAVORITE';
const REMOVE_SHOW_FAVORITE = 'REMOVE_SHOW_FAVORITE';
const TOGGLE_THEME = 'TOGGLE_THEME';

export const initialState: UserState = {
  favorites: [],
  showFavorites: false,
  darkTheme: false,
};

export default function UserReducer(state = initialState, action: Action): UserState {
  switch (action.type) {
    case REMOVE_SHOW_FAVORITE:
      return { ...state, showFavorites: false };
    case SET_SHOW_FAVORITE:
      return { ...state, showFavorites: !state.showFavorites };
    case TOGGLE_THEME:
      return { ...state, darkTheme: !state.darkTheme };
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

export const toggleFavorite = (movieId: string) => ({
  type: TOGGLE_STATE,
  payload: movieId,
});

export const setShowFavorite = () => ({
  type: SET_SHOW_FAVORITE,
});

export const removeShowFavorite = () => ({
  type: REMOVE_SHOW_FAVORITE,
});

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});
