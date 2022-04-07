export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw TypeError('Name must be a string');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw TypeError('Length must be a number');
    }
    if (Array.isArray(students)) {
      for (const elem in students) {
        if (typeof elem !== 'string') throw TypeError('Student element not a string');
      }
      this._students = students;
    } else {
      throw TypeError('Students must be an array');
    }
  }
}
