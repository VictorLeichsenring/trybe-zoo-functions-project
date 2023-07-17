const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const result = {
    adult: 0,
    child: 0,
    senior: 0,
  };
  entrants.forEach((element) => {
    const { age } = element;
    if (age < 18) {
      result.child += 1;
    } else if (age >= 18 && age < 50) {
      result.adult += 1;
    } else (result.senior += 1);
  });
  return result;
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.lenght === 0) {
    return 0;
  }
  const visits = countEntrants(entrants);
  const children = visits.child;
  const adults = visits.adult;
  const seniors = visits.senior;
  const childrenValue = children * data.prices.child;
  const adultsValue = adults * data.prices.adult;
  const seniorsValue = seniors * data.prices.senior;
  const stringValue = (childrenValue + adultsValue + seniorsValue).toFixed(2);
  return parseFloat(stringValue);
};

module.exports = { calculateEntry, countEntrants };
