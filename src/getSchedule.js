const data = require('../data/zoo_data');

const weekDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

const buildDailySchedule = (day) => {
  const animals = data.species
    .filter((specie) => specie.availability.includes(day))
    .map((specie) => specie.name);

  const officeHour = [
    `Open from ${data.hours[day].open}am`,
    `until ${data.hours[day].close}pm`,
  ].join(' ');

  return {
    officeHour,
    exhibition: animals,
  };
};

const buildSchedule = () => {
  const schedule = {};
  weekDays.forEach((day) => {
    schedule[day] = buildDailySchedule(day);
  });

  schedule.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };

  return schedule;
};

const getAnimalsForDay = (day) => {
  if (!day || day === 'Monday') return {};

  const animals = data.species
    .filter((specie) => specie.availability.includes(day))
    .map((specie) => specie.name);

  const officeHour = [
    `Open from ${data.hours[day].open}am`,
    `until ${data.hours[day].close}pm`,
  ].join(' ');

  return {
    [day]: {
      officeHour,
      exhibition: animals,
    },
  };
};

const getAvailabilityForSpecies = (species) => {
  if (!species) return {};

  const speciesData = data.species.find((element) => element.name === species);
  return speciesData.availability;
};

const strategies = {
  default: buildSchedule,
  Monday: () => ({
    Monday: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    },
  }),
  weekDays: getAnimalsForDay,
  species: getAvailabilityForSpecies,
};

const getSchedule = (scheduleTarget) => {
  const species = data.species.map((specie) => specie.name);
  let strategy = 'default';

  if (scheduleTarget === 'Monday') strategy = 'Monday';
  else if (weekDays.includes(scheduleTarget)) strategy = 'weekDays';
  else if (species.includes(scheduleTarget)) strategy = 'species';

  return strategies[strategy](scheduleTarget);
};

module.exports = getSchedule;
