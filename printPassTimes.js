const printPassTimes = function(passTimes) {
  for (let i = 0; i < passTimes.length; i++) {
    let date = new Date(passTimes[i].risetime);
    console.log(`Next pass at ${date} for ${passTimes[i].duration} seconds!`);
  }
};

module.exports = { printPassTimes };