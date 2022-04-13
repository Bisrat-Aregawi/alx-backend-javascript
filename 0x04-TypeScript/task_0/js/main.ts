import renderTable from './tableRender.js';

interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

/**
* Student object 1
*
* @type {{ firstName: string, lastName: string, age: number, locatin: string }}
*/
const student1: Student = {
	firstName: 'Guillaume',
	lastName: 'Dasillva',
	age: 99,
	location: 'Mars',
}

/**
* Student object 1
*
* @type {{ firstName: string, lastName: string, age: number, locatin: string }}
*/
const student2: Student = {
	firstName: 'Juilen',
	lastName: 'Barbier',
	age: 17,
	location: 'Kepler-1649c',
}

/**
* @type {Student[]}
*/
const studentsList: Array<Student> = [
	student1,
	student2,
];

document.body
	.appendChild(
		renderTable(studentsList)
	);
