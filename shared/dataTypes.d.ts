interface MovieState {
  data: IMovie[];
}

interface IMovie {
  id: number;
  title: string;
  year: string;
  genres: string[];
  ratings: string[];
  posterUrl: string;
  imdbRating: number;
  originalTitle?: '';
  actors: string[];
}
