interface Category {
  id: number;
  name: string;
  isSelected: boolean;
}

interface MovieState {
  data: IMovie[];
  categories: Category[];
}

interface IMovie {
  id: number;
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
