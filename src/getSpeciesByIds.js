const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (!ids.length) {
    return [];
  }
  return data.species.filter((species) => ids.includes(species.id));
};

module.exports = getSpeciesByIds;
