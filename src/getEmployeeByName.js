const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return data.employees
    .find((employees) =>
      employees.firstName === employeeName
      || employees.lastName === employeeName) || {};
}

module.exports = getEmployeeByName;
