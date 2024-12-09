
const { nextISSTimesForMyLocation } = require('./iss');


nextISSTimesForMyLocation((error, flyoverTimes) => {
  if (error) {
    console.error('Error:', error);
  } else {
    flyoverTimes.forEach(time => console.log(time));
  }
});
