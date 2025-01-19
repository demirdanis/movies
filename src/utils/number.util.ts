export const forceParseStringToNumer = (
  numberStr: string | undefined
): number => {
  const parsed = parseInt(numberStr ?? "", 10);
  return isNaN(parsed) ? 0 : parsed;
};
