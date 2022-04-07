export default class HolbertonCourse {
  constructor(name, length, students) {
    HolbertonCourse.checkType(name, 'string', 'Name must be a string');
    this._name = name;

    HolbertonCourse.checkType(length, 'number', 'Length must be a number');
    this._length = length;

    if (Array.isArray(students)) {
      for (const elem of students) {
        HolbertonCourse.checkType(
          elem,
          'string',
          'Student element not a string',
        );
      }
      this._students = students;
    } else {
      throw TypeError('Students must be an array');
    }
  }

  // Getter methods
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Settor methods
  set name(newName) {
    HolbertonCourse.checkType(newName, 'string', 'Name must be a string');
    this._name = newName;
  }

  set length(newLength) {
    HolbertonCourse.checkType(newLength, 'number', 'Length must be a number');
    this._length = newLength;
  }

  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      for (const elem of newStudents) {
        HolbertonCourse.checkType(
          elem,
          'string',
          'Student element not a string',
        );
      }
      this._students = newStudents;
    } else {
      throw TypeError('Students must be an array');
    }
  }

  // Static utility method
  static checkType(arg, type, errMsg) {
    /*
      * Throw error if `arg` is not of type `type`
      */
    // eslint-disable-next-line valid-typeof
    if (typeof arg !== type) throw TypeError(errMsg);
    return true;
  }
}
