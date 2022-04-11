/**
  * getStudentIdsSum - Function returns the sum of all ids found as a property
  * in passed Array's objects
  * @param {Array} studentsList - List of student objects.
  * @returns {Number} Sum of all ids
  */
export default function getStudentIdsSum(studentsList) {
  return studentsList
    .map((student) => student.id)
    .reduce((prev, cur) => (prev + cur));
}
