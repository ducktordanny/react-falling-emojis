/**
 * It is basicly makes a map (Array.prototype.map) on an Object with filtering the type of its properties.
 *
 * @param obj your own object
 * @param type type what you want to be returned
 * @param callback returns the elements of the final array
 * @returns an array
 *
 * E.g.:
 * ```ts
 * const result = entriesMapByType(myObject, 'number', ([key, value]) => ({
 *   key,
 *   value
 * }));
 * // result: an array with objects where objects.value is number
 * ```
 */
const entriesMapByType = (
  obj: Object,
  type: string,
  callback: ([key, value]: [string, any], index: number) => void
) => {
  let index = 0;
  return Object.entries(obj)
    .map(([key, value]) =>
      typeof value === type ? callback([key, value], index++) : undefined
    )
    .filter((value) => typeof value !== 'undefined');
};

export default entriesMapByType;
