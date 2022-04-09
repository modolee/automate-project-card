export const isNumeric = (value: number | string | undefined): boolean => {
  if (typeof value === 'undefined') return false;

  const isTypeString = typeof value === 'string';
  return isNaN(isTypeString ? parseInt(value) : value);
};
