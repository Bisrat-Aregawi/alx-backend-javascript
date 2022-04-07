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
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      for (const elem in newStudents) {
        if (typeof elem !== 'string') throw TypeError('Student element not a string');
      }
      this._students = newStudents;
    } else {
      throw TypeError('Students must be an array');
    }
  }
}
