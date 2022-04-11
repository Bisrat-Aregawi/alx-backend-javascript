/**
  * cleanSet - Function constructs string combinations from set elements which
  * are concatenates of those elements minus provided match string
  * @param {Set} set - Set to extract strings from
  * @param {String} startString - Match string which determines which element
  * gets concatenated
  * @returns {String} Cut strings joined with the character '-'
  */
export default function cleanSet(set, startString) {
  const remnants = [];
  if (startString && Array.from(set).every((e) => typeof e === 'string')) {
    set.forEach((elem) => {
      if (elem.startsWith(startString)) {
        remnants.push(elem.slice(String(startString).length));
      }
    });
  }
  return remnants.filter((e) => e !== '').join('-');
}
