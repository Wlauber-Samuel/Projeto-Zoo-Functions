const data = require('../data/zoo_data');

const { hours, species } = data;
const days = Object.keys(hours);
const expectedObj = {};

days.forEach((day) => {
  expectedObj[day] = {
    officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
    exhibition: species.filter(({ availability }) => availability
      .includes(day)).map(({ name }) => name),
  };
});
expectedObj.Monday = {
  exhibition: 'The zoo will be closed!',
  officeHour: 'CLOSED',
};

function getSchedule(ScheduleTarget) {
  if (species.map(({ name }) => name).includes(ScheduleTarget)) {
    return species.find(({ name }) => name === ScheduleTarget).availability;
  }
  if (days.includes(ScheduleTarget)) {
    return ({ [ScheduleTarget]: expectedObj[ScheduleTarget] });
  }
  return expectedObj;
}

module.exports = getSchedule;
