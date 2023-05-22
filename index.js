const { nextISSTimesForMyLocation } = require('./iss');
const { printPassTimes } = require('./printPassTimes');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log(error);
  }

  printPassTimes(passTimes);
});