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

// * Get a higher resolution image.
// ? This image should be provided from back-end. This ugly solution just translate from url after observing its pattern.
export const getScaledImageUrl = (imgUrl: string, scaleFactor: number) => {
  const frameSizeStr = imgUrl.substring(imgUrl.indexOf('_AL_') - 7, imgUrl.indexOf('_AL_'));
  const imgSizeStr = imgUrl.substring(imgUrl.indexOf('_SY') + 3, imgUrl.indexOf('_SY') + 6);
  const scaledImgStr = (parseInt(imgSizeStr) * scaleFactor).toString();

  const frameSizes = frameSizeStr.split(',');
  const scaledFrameSizes = [
    parseInt(frameSizes[0]) * scaleFactor,
    parseInt(frameSizes[1]) * scaleFactor,
  ];

  const scaledFrameSizesStr = scaledFrameSizes.join(',');
  let resUrl = imgUrl.replace(imgSizeStr, scaledImgStr);
  resUrl = resUrl.replace(frameSizeStr, scaledFrameSizesStr);

  return resUrl;
};

const utils = {
  getAverageRatings,
  convertPlayTime,
  getScaledImageUrl,
};

export default utils;
