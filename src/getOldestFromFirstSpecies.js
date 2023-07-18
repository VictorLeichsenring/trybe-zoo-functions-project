const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  // verificar a quem pertence o id
  const designatedEmployee = data.employees.find((employee) => employee.id === id);

  // verificar os animais gerenciados pelo responsável
  const managedAnimals = designatedEmployee.responsibleFor;

  // verificar a primeira especie gerenciada pelo responsavel
  const firstSpecieManaged = managedAnimals[0];

  // encontrar specie pelo id
  const speciesFound = data.species.find((species) => species.id === firstSpecieManaged);

  // encontrar o animal mais velho dessa especie
  const animals = speciesFound.residents;
  let oldestAnimal = animals[0];
  animals.forEach((animal) => {
    if (animal.age > oldestAnimal.age) {
      oldestAnimal = animal;
    }
  });

  // retornar um array com informações do animal
  const result = [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
  return result;
};

module.exports = getOldestFromFirstSpecies;
