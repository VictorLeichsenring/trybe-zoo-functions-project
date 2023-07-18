const data = require('../data/zoo_data');

function filterBySex(animals, sex) {
  return animals.filter((animal) => animal.sex === sex);
}

function getAnimalNames(residents) {
  return residents.map((animal) => animal.name);
}

function sortAnimalNames(names) {
  return names.sort();
}

function addToAnimalMap(animalMap, location, name, names, includeNames) {
  if (includeNames) {
    animalMap[location].push({ [name]: names });
  } else {
    animalMap[location].push(name);
  }
}

function getAnimalMap(options = {}) {
  const { includeNames = false, sorted = false, sex: filterSex } = options;
  const animalMap = { NE: [], NW: [], SE: [], SW: [] };

  for (const { name, location, residents } of data.species) {
    let filteredResidents = residents;
    if (filterSex) {
      filteredResidents = filterBySex(residents, filterSex);
    }

    const animalNames = getAnimalNames(filteredResidents);
    const sortedNames = sorted ? sortAnimalNames(animalNames) : animalNames;

    addToAnimalMap(animalMap, location, name, sortedNames, includeNames);
  }

  return animalMap;
}

module.exports = getAnimalMap;
