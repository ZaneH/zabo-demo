export const formatTicker = (string) => {
  return string.split('-')[0].replace('$', '');
};
