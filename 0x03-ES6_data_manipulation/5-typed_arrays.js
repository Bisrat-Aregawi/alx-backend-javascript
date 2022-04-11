/**
  * createInt8TypedArray - Function returns new ArrayBuffer with Int8 value at
  * a specific positin
  * @param {Number} length - Number of 8 bit chuncks of memory
  * @param {Number} position - 0 indexed position to put value on
  * @param {Number} value - Value to set at given position
  * @returns {ArrayBuffer} or error with custom message
  */
export default function createInt8TypedArray(length, position, value) {
  if (position >= 0 && position < length) {
    const view = new DataView(new ArrayBuffer(length));
    view.setInt8(position, value);
    return view;
  }
  throw Error('Position outside range');
}
