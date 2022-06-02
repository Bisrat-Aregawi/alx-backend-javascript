/**
 * @module StudentsController
 */
const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    let content = 'This is the list of our students';
    readDatabase('database.csv')
      .then((data) => {
        response.statusCode = 200;
        Object.keys(data).forEach((field) => {
          content += `Number of students in ${field}: ${field.length}. `;
          content += `List: ${data[field].join(',')}`;
        });
        response.send(content);
      })
      .catch((err) => {
        response.statusCode = 500;
        response.send(err.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const urlPath = request.originalurl.split('/');
    if (urlPath.length !== 2) {
      response.statusCode = 400;
      response.send('Bad Request');
    } else if (urlPath[0] !== 'students') {
      response.statusCode = 400;
      response.send('Bad Request');
    } else if (!['CS', 'SWE'].includes(urlPath[1])) {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
    }
    readDatabase('database.csv')
      .then((data) => {
        const content = `List: ${data[urlPath[1]].join(',')}`;
        response.send(content);
      })
      .catch((err) => {
        response.statusCode = 500;
        response.send(err.message);
      });
  }
}

module.exports = StudentsController;
