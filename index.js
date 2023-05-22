const { fetchMyIP, fetchCoordsByIP } = require('./iss');

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