export default function createIteratorObject(report) {
  const employees = [];

  for (const dep in report.allEmployees) {
    if ({}.hasOwnProperty.call(report.allEmployees, dep)) {
      employees.push(...report.allEmployees[dep]);
    }
  }

  return employees;
}
