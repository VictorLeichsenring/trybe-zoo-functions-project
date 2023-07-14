const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  const employeeFound = data.employees.find((employee) => {
    const isFirstName = employeeName === employee.firstName;
    const isLastName = employeeName === employee.lastName;

    return isFirstName || isLastName;
  });
  return employeeFound;
};

module.exports = getEmployeeByName;
