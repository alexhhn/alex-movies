import axios from 'axios';
import utils from 'shared/utils';

export const fetchMovieById = async (movieId: string) => {
  try {
    const res = await axios.get(`/data/${movieId}`);

    const data = {
      ...res.data,
      rating: utils.getAverageRatings(res.data.ratings),
      duration: utils.convertPlayTime(res.data.duration),
    };

    return data;
  } catch (err) {
    console.error('error :', err);
    return undefined;
  }
};
