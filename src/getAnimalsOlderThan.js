const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const speciesFound = data.species.find((species) => species.name === animal);
  return speciesFound.residents.every((resident) => resident.age >= age);
};
module.exports = getAnimalsOlderThan;
