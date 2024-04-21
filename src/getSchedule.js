const data = require('../data/zoo_data');

//Criada uma constante para armazenar os dias da semana
const weekDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

// Criada função para identificar qual a especie
function identifyAnimal(string) {
  const animalFound = data.species.find((animal) => animal.name === string);
  return animalFound;
}

// Criada função que cria um objeto de acordo com o dia recebido
function createDay(day) {
  const animals = data.species
    .filter((specie) => specie.availability.includes(day))
    .map((specie) => specie.name);
  const officeHour = `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
  return {
    officeHour,
    exhibition: animals,
  };
}

// criada função que itera sobre os dias da semana e retorna um objeto com varios dias
function withoutParameters() {
  const schedule = {};
  weekDays.forEach((day) => {
    schedule[day] = createDay(day);
  });
  schedule.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return schedule;
}

// Criada função que retorna o Domingo
function isMonday() {
  return {
    Monday: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    },
  };
}

// função principal que irá chamar as demais funções
const getSchedule = (scheduleTarget) => {
  //Se for domingo
  if (scheduleTarget === 'Monday') {
    return isMonday();
  }

  // se o parametro for vazio
  if (!scheduleTarget) {
    return withoutParameters();
  }
  // armazena o animal
  const animal = identifyAnimal(scheduleTarget);
  if (animal) {
    return animal.availability;
  }
  // se for dia da semana
  if (weekDays.includes(scheduleTarget)) {
    const schedule = {
      [scheduleTarget]: createDay(scheduleTarget),
    };
    return schedule;
  }
  // demais situações
  return withoutParameters();
};

module.exports = getSchedule;
