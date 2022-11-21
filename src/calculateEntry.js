const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  for (let index = 0; index < entrants.length; index += 1) {
    const people = entrants[index];

    if (people.age < 18) {
      child += 1;
    } else if (people.age >= 18 && people.age < 50) {
      adult += 1;
    } else if (people.age >= 50) {
      senior += 1;
    }
  }
  return { child: child, adult: adult, senior: senior};
}
function calculateEntry(entrants) {
  if (entrants === {})
    return 0;
  else if (entrants === undefined) {
    return 0;
  }

  let total = countEntrants(entrants);
  let priceChild = 20.99;
  let priceAdult = 49.99;
  let priceSenior = 24.99;

  total.child = total.child * priceChild;
  total.adult = total.adult * priceAdult;
  total.senior = total.senior * priceSenior;

  return total.child + total.adult + total.senior;
}

module.exports = { calculateEntry, countEntrants };

console.log(calculateEntry([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));