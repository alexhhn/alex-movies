interface MovieState {
  data: IMovie[];
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
}
