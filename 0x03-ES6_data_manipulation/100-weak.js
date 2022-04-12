const weakMap = new WeakMap();

/**
  * queryAPI - Function is dummy API querying function
  * @param {object} endpoint - An endpoint object
  */
export default function queryAPI(endpoint) {
  if (typeof endpoint !== 'object') return;
  if (weakMap.has(endpoint)) {
    if (weakMap.get(endpoint) < 5) {
      weakMap.set(
        endpoint,
        weakMap.get(endpoint) + 1,
      );
      return;
    }
    throw Error('Endpoint load is high');
  }
  weakMap.set(endpoint, 1);
}

module.exports = { queryAPI, weakMap };
