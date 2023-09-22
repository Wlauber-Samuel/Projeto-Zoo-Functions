const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const firstAnimal = employees.find((person) => person.id === id).responsibleFor[0];
  const animal = species.find((specie) => specie.id === firstAnimal).residents
    .sort((a, b) => b.age - a.age).find((Oldest) => Oldest);
  return Object.values(animal);
}

module.exports = getOldestFromFirstSpecies;
