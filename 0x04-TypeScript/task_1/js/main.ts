interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[objAttr: string]: any;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

let printTeacher: printTeacherFunction;

printTeacher = (firstName, lastName): string => {
	return [firstName[0] + '.', lastName].join(' ');
}

interface StudentClassConstructor {
	new (firstName: string, lastName: string): StudentClassInterface
}

interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string;
}

class StudentClass implements StudentClassInterface{
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return 'Currently working';
	}

	displayName(): string {
		return this.firstName;
	}
}

const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false,
};

const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
}

console.log(teacher3);
console.log(director1);
console.log(printTeacher('Leykun', 'Gizaw'));
