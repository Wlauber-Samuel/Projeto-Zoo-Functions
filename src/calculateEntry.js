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
  return { child: child, adult: adult, senior: senior };
}
function calculateEntry(entrants) {
  if (entrants === {} || entrants === undefined) {
    return 0;
  }

  const total = countEntrants(entrants);
  const priceChild = 20.99;
  const priceAdult = 49.99;
  const priceSenior = 24.99;

  total.child = total.child * priceChild;
  total.adult = total.adult * priceAdult;
  total.senior = total.senior * priceSenior;

  return total.child + total.adult + total.senior;
}

module.exports = { calculateEntry, countEntrants };
