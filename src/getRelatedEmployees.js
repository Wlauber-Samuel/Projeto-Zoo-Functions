const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((isMAnager) => isMAnager.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else if (isManager(managerId)) {
    const Manager = data.employees.filter((manager) => manager.managers.includes(managerId));
    return Manager.map((name) => `${name.firstName} ${name.lastName}`);
  }
}

module.exports = { isManager, getRelatedEmployees };
