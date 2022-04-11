/**
  * hasValuesFromArray - Function determines if all elements of an array exist
  * within provided set
  * @param {Set} set - Search set
  * @param {Array} arr - Array whose elements are checked for existence in set
  * @returns {Boolean} true if all elements are present in set, false
  * otherwise
  */
export default function hasValuesFromArray(set, arr) {
  let found = true;
  arr.forEach((elem) => {
    if (!set.has(elem)) found = false;
  });
  return found;
}
