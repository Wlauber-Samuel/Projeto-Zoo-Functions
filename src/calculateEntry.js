const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return {
    child: entrants.filter((visit) => visit.age < 18).length,
    adult: entrants.filter((visit) => visit.age >= 18 && visit.age < 50).length,
    senior: entrants.filter((visit) => visit.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) { return 0; }

  const peoples = countEntrants(entrants);
  const { child, adult, senior } = peoples;

  let amount = 0;
  amount = child * data.prices.child + adult * data.prices.adult + senior * data.prices.senior;
  return amount;
}
module.exports = { calculateEntry, countEntrants };
