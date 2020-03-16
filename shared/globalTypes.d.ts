interface Category {
  id: number;
  name: string;
  isSelected: boolean;
}

interface MovieState {
  data: IMovie[];
  categories: Category[];
  selectedCategories: string[];
  sortBy: string;
}

interface MovieDetailState {
  data: IMovie | undefined;
}

interface UserState {
  favorites: string[];
  showFavorites: boolean;
}

interface IMovie {
  id: string;
  title: string;
  year: string;
  genres: string[];
  ratings: string[];
  posterurl: string;
  imdbRating: number;
  originalTitle?: '';
  actors: string[];
  duration: string;
  contentRating: string;
  storyline: string;
}

interface Action {
  type: string;
  payload: any;
}
