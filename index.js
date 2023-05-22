const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log(error);
  }

  for (let i = 0; i < passTimes.length; i++) {
    let date = new Date(passTimes[i].risetime);
    console.log(`Next pass at ${date} for ${passTimes[i].duration} seconds!`);
  }
});