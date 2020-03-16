import _union from 'lodash/union';
import _reduce from 'lodash/reduce';

const SET_MOVIES = 'SET_MOVIES';
const SET_CATEGORIES = 'SET_CATEGORIES';
const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';
const SET_SORTBY = 'SET_SORTBY';
const RESET_CATEGORIES = 'RESET_CATEGORIES';

export const initialState: MovieState = {
  data: [],
  categories: [],
  selectedCategories: [],
  sortBy: '',
};

export default function MovieReducer(state = initialState, action: Action): MovieState {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, data: action.payload };
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case SET_SORTBY:
      return { ...state, sortBy: action.payload };
    case TOGGLE_CATEGORY:
      // * We want to avoid mutating state. In order to toggle a category, we first find the selected category, toggle its selected boolean-value in categories and then update state.selectedCategories
      const categoryId = action.payload;
      const selectedCategory = state.categories.find(cat => cat.id === categoryId);

      // ? Here we can consider using libraries like immutation helper for better readability
      if (selectedCategory) {
        return {
          ...state,
          categories: [
            ...state.categories.slice(0, categoryId),
            { ...selectedCategory, isSelected: !selectedCategory.isSelected },
            ...state.categories.slice(categoryId + 1),
          ],
          selectedCategories: state.selectedCategories.includes(selectedCategory.name)
            ? state.selectedCategories.filter(category => category !== selectedCategory.name)
            : [...state.selectedCategories, selectedCategory.name],
        };
      } else {
        return state;
      }
    case RESET_CATEGORIES:
      return {
        ...state,
        selectedCategories: [],
        categories: state.categories.map(cat => {
          cat.isSelected = false;
          return cat;
        }),
      };
    default:
      return state;
  }
}

//* Actions creators
export const setMovies = (payload: IMovie[]) => ({
  type: SET_MOVIES,
  payload,
});

export const toggleCategory = (categoryId: number) => ({
  type: TOGGLE_CATEGORY,
  payload: categoryId,
});

export const setSortby = (sortItemId: string) => ({
  type: SET_SORTBY,
  payload: sortItemId,
});

export const resetCategories = () => ({
  type: RESET_CATEGORIES,
});

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
