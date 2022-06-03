/**
 * @module AppController
 */

/**
 * Class that holds a handler for root path
 */
class AppController {
  /**
   * A handler function for '/' path
   * @param {object} request request object of express app
   * @param {object} response response object of express app
   */
  static getHomepage(request, response) {
    response.statusCode = 200;
    response.send('Hello Holberton School!');
  }
}

module.exports = AppController;
