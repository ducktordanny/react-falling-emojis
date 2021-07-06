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
 * const person = {
 *   firstName: 'Peter',
 *   secondName: 'Gardener',
 *   age: 21,
 *   birthYear: 1998
 * };
 *
 * const result = entriesMapByType(person, 'number', ([key, value]) => ({
 *   key,
 *   value
 * }));
 *
 * console.log(result);
 *
 * // (2) [{…}, {…}]
 * // 0: {key: "age", value: 21}
 * // 1: {key: "birthYear", value: 1998}
 * // length: 2
 * // __proto__: Array(0)
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
