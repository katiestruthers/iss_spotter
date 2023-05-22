const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchISSFlyOverTimes({ latitude: 49.8997541, longitude: -97.1374937 }, (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }

//   console.log(data);
// });

// fetchCoordsByIP('42', (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }

//   console.log(data);
// });

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });