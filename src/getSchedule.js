const data = require('../data/zoo_data');

const weekDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
function identifyAnimal(string) {
  const animalFound = data.species.find((animal) => animal.name === string);
  return animalFound;
}

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

function isMonday() {
  return {
    Monday: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    },
  };
}

const getSchedule = (scheduleTarget) => {
  if (scheduleTarget === 'Monday') {
    return isMonday();
  }

  if (!scheduleTarget) {
    return withoutParameters();
  }

  const animal = identifyAnimal(scheduleTarget);
  if (animal) {
    return animal.availability;
  }

  if (weekDays.includes(scheduleTarget)) {
    const schedule = {
      [scheduleTarget]: createDay(scheduleTarget),
    };
    return schedule;
  }

  return withoutParameters();
};

module.exports = getSchedule;
