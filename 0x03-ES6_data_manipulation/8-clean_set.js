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

  if (set && startString) {
    if (typeof startString === 'string') {
      set.forEach((elem) => {
        if (typeof elem === 'string' && elem.startsWith(startString)) {
          remnants.push(elem.slice(startString.length));
        }
      });
    }
    return remnants.join('-');
  }
  return '';
}
