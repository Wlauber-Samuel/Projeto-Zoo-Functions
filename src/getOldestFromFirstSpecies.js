const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstAnimal = data.employees.find((person) => person.id === id).responsibleFor[0];
  const animal = data.species.find((specie) => specie.id === firstAnimal).residents;
  return Object.values(animal.sort((first, second) => second.age - first.age))[0];
}

module.exports = getOldestFromFirstSpecies;
