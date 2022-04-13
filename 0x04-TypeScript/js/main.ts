interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'Guillaume',
	lastName: 'Dasillva',
	age: 99,
	location: 'Mars',
}

const student2: Student = {
	firstName: 'Juilen',
	lastName: 'Barbier',
	age: 17,
	location: 'Kepler-1649c',
}

const studentsList: Array<Student> = [
	student1,
	student2,
];

console.log(studentsList);
