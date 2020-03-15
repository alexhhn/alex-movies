import _mean from 'lodash/mean';

export const getAverageRatings = (ratings: string[]) => {
  return _mean(ratings).toFixed(1);
};

export const convertPlayTime = (playtime?: string) => {
  if (!playtime) return '';
  const minutes = parseInt(playtime.replace(/\D/g, ''));
  if (minutes % 60) {
    const hours = (minutes - (minutes % 60)) / 60;
    return hours + 'T' + (minutes % 60) + 'M';
  }
};

const utils = {
  getAverageRatings,
  convertPlayTime,
};

export default utils;
