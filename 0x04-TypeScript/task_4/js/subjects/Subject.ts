/// <reference path = "./Teacher.ts" />

namespace Subjects {
  /** Subject parent class*/
  export class Subject {
    teacher: Teacher;
    
    /** Teacher setter method for all subjects */
    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
