/**
 *
 * @param {Ticker symbol} string
 * @returns A string without the -ZABO suffix and without any '$'
 */
export const formatTicker = (string) => {
  if (!string) return '';

  const index = string.lastIndexOf('-');
  if (!string.includes('-')) return string.replace('$', '');

  return string.slice(0, index).replace('$', '');
};
