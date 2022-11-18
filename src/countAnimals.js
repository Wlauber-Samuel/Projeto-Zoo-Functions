const data = require('../data/zoo_data');

function countAnimals({ specie, sex } = {}) {
  if (!specie) {
  return data.species
    .reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
        return acc;
        }, {});
      }

  if (!sex) {
  return data.species
    .find((especie) => especie.name === specie).residents.length;
      }

  if (!sex) {
  return data.species.find((element) => element.name === specie).residents.length;
    }
  const especie = data.species.find((element) => element.name === specie);
  return especie.residents.filter((resultFilter) => resultFilter.sex === sex).length;
}

module.exports = countAnimals;
