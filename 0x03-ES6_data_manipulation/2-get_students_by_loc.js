/**
  * getStudentsByLocation - Function returns array of objects representing a
  * specific city.
  * @param {Array} studentsList - List of student objects.
  * @param {String} city - City provided for return criteria.
  * @returns {Array} Array of chosen student objects based on city argument.
  */
export default function getStudentsByLocation(studentsList, city) {
  return studentsList.filter(
    (student) => student.location === city,
  );
}
