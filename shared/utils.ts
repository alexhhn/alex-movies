import _mean from 'lodash/mean';

export const getAverageRatings = (ratings: string[]) => {
  return _mean(ratings).toFixed(1);
};

const utils = {
  getAverageRatings,
};

export default utils;
