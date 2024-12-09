
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.error('Error fetching IP:', error);
    return;
  } else {
    console.log('Your IP address is:', ip);
  }
  
  fetchCoordsByIP(ip, (error, coords) => {
    if (error) {
      console.error('Error fetching coordinates:', error);
      return;
    } else {
      console.log('Coordinates:', coords);

      // Fetch the ISS flyover times using the retrieved coordinates
      fetchISSFlyOverTimes(coords, (error, flyoverTimes) => {
        if (error) {
          console.error('Error fetching ISS flyover times:', error);
        } else {
          console.log('ISS Flyover Times:', flyoverTimes);
        }
      });
    }
  });
});
