/// <reference path = "./Teacher.ts" />
/// <reference path = "./Subject.ts" />

namespace Subjects {
  export interface Teacher {
    /** Teacher's experience teaching Java language */
    experienceTeachingJava?: number;
  }

  /** Java class extending Subject class */
  export class Java extends Subject {
    getRequirements() {
      return 'Here is the list of requirements for Cpp';
    }
    getAvailableTeacher() {
      if (this.teacher.experienceTeachingJava === 0) return 'No available teacher';
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
