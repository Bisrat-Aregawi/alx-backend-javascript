/**
 * @module StudentsController
 */
const readDatabase = require('../utils');

/**
 * StudentsController class defining handler functions as its static methods
 */
class StudentsController {
  /**
   * A handler function for '/students' path
   * @param {object} request request object of express app
   * @param {object} response response object of express app
   */
  static getAllStudents(request, response) {
    let content = 'This is the list of our students\n';
    readDatabase(process.argv[2])
      .then((data) => {
        response.statusCode = 200;
        Object.keys(data).forEach((field) => {
          content += `Number of students in ${field}: ${field.length}. `;
          content += `List: ${data[field].join(',')}\n`;
        });
        response.send(content.slice(0, -1));
      })
      .catch((err) => {
        response.statusCode = 500;
        response.send(err.message);
      });
  }

  /**
   * A handler function for '/students/{CS, SWE}' path
   * @param {object} request request object of express app
   * @param {object} response response object of express app
   */
  static getAllStudentsByMajor(request, response) {
    if (!['CS', 'SWE'].includes(request.params.major)) {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
    } else {
      readDatabase(process.argv[2])
        .then((data) => {
          const content = `List: ${data[request.params.major].join(',')}`;
          response.send(content);
        })
        .catch((err) => {
          response.statusCode = 500;
          response.send(err.message);
        });
    }
  }
}

module.exports = StudentsController;
