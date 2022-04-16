/// <reference path = "./Teacher.ts" />

namespace Subjects {
  /**
  * Subject class from Subject.ts file
  */
  export class Subject {
    teacher: Teacher;
    
    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
