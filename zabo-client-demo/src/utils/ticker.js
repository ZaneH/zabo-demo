export const formatTicker = (string) => {
  if (!string) return '';
  return string.split('-')[0].replace('$', '');
};
