export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const elem of array) {
    newArr.push(appendString + elem);
  }
  return newArr;
}
