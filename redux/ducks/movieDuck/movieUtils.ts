import axios from 'axios';
import utils from 'shared/utils';

export const fetchMovies = async () => {
  try {
    const res = await axios.get('/data');
    // Translate data to readable fields
    // It *might* be better to get these field from back-end
    const data = res.data.map((element: IMovie) => {
      return {
        ...element,
        rating: utils.getAverageRatings(element.ratings),
        duration: utils.convertPlayTime(element.duration),
      };
    });

    return data;
  } catch (err) {
    console.error('error :', err);
    return undefined;
  }
};

export const movieHasCategory = (movie: IMovie, selectedCategories: string[]) => {
  let res = false;
  selectedCategories.forEach(element => {
    if (movie.genres.includes(element)) {
      console.log('movies.genres', movie.genres);
      res = true;
    }
  });
  return res;
};
