export default function createReportObject(employeesList) {
  const report = {
    allEmployees: {},
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
  for (const prop in employeesList) {
    if ({}.hasOwnProperty.call(employeesList, prop)) {
      report.allEmployees[prop] = employeesList[prop];
    }
  }
  return report;
}
