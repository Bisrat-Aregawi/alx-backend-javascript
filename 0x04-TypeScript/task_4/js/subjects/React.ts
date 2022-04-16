/// <reference path = "./Teacher.ts" />
/// <reference path = "./Subject.ts" />

namespace Subjects {
  export interface Teacher {
    /** Teacher's experience teaching React language */
    experienceTeachingReact?: number;
  }

  /** React class extending Subject class */
  export class React extends Subject {
    getRequirements() {
      return 'Here is the list of requirements for React';
    }
    getAvailableTeacher() {
      if (this.teacher.experienceTeachingReact === 0) return 'No available teacher';
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
