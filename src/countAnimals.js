const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  let result = {};
  if (!animal) {
    result = data.species.reduce((acc, index) => {
      acc[index.name] = index.residents.length;
      return acc;
    }, {});
  } else {
    const { species } = animal;
    const { sex } = animal;
    const targetSpecies = data.species.find((speciesItem) => speciesItem.name === species);
    if (sex) {
      result = targetSpecies.residents.filter((resident) => resident.sex === sex).length;
    } else {
      result = targetSpecies.residents.length;
    }
  }
  return result;
};

module.exports = countAnimals;
