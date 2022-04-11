/**
  * getGrade - Function returns grade value of student
  *
  * @param {Number} id - Id of student to get grade of
  * @param {Array} grades - Array of student objects containing grades
  * @returns {Number|String} The grade of student with given id, 'N/A'
  * otherwise
  */
function getGrade(id, grades) {
  let grd = 'N/A';
  grades.forEach((grade) => {
    if (grade.studentId === id) grd = grade.grade;
  });
  return grd;
}

/**
  * updateStudentGradeByCity - Function returns an array of students for a
  * specific city with their new grade
  * @param {Array} studentsList - Array of student objects
  * @param {String} city - City for fiter criteria
  * @param {Array} newGrades - Array of a student's grade objects
  * @returns {Array} Array of objects with appended grade
  */
export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if (!Array.isArray(studentsList)) return [];
  return studentsList.filter((student) => student.location === city)
    .map((student) => ({ ...student, grade: getGrade(student.id, newGrades) }));
}
