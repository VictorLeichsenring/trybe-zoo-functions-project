const data = require('../data/zoo_data');

const ERROR_MESSAGE = 'Informações inválidas';

const validateName = (name) => {
  const validFirstName = data.employees.some((employee) => employee.firstName === name);
  const validLastName = data.employees.some((employee) => employee.lastName === name);
  if (!validFirstName && !validLastName) {
    throw new Error(ERROR_MESSAGE);
  }
};

const validateID = (id) => {
  const validID = data.employees.some((employee) => employee.id === id);
  if (!validID) {
    throw new Error(ERROR_MESSAGE);
  }
};

const getSpeciesData = (speciesId) => {
  const speciesInfo = data.species.find((sp) => sp.id === speciesId);
  if (speciesInfo) {
    return {
      name: speciesInfo.name,
      location: speciesInfo.location,
    };
  }
};

const getEmployeeCoverage = (employee) => {
  const speciesData = employee.responsibleFor.map((id) => getSpeciesData(id));
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: speciesData.map((info) => info.name),
    locations: speciesData.map((info) => info.location),
  };
};

const getEmployeesCoverage = (employeeData = {}) => {
  const { name, id } = employeeData;

  if (!id && !name) {
    return data.employees.map(getEmployeeCoverage);
  }

  if (id) {
    validateID(id);
    const employeeById = data.employees.find((emp) => emp.id === id);
    return getEmployeeCoverage(employeeById);
  }

  if (name) {
    validateName(name);
    const employeeByName = data.employees
      .find((emp) => emp.firstName === name || emp.lastName === name);
    return getEmployeeCoverage(employeeByName);
  }

  throw new Error(ERROR_MESSAGE);
};

module.exports = getEmployeesCoverage;
