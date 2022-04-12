/**
  * updateUniqueItems - Function updates passed map object
  * @param {Map} map - Map object to updates contents of
  * @returns {Map} Updated map where value of 1 is updated to 100
  */
export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    map.forEach((v, k) => {
      if (v === 1) map.set(k, 100);
    });
    return map;
  }
  throw Error('Cannot process');
}
