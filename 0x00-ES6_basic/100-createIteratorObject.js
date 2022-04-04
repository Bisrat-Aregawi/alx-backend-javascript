export default function createIteratorObject (report) {
  const employees = [];

  for (const dep in report.allEmployees) {
    employees.push(...report.allEmployees[dep]);
  }

  return employees;
}
