const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.error('Error fetching IP:', error);
    return;
  } else {
    console.log('Your IP address is:', ip);
  }
  
    fetchCoordsByIP(ip, (error, data) => {
      if (error) {
        console.error('Error fetching coordinates:', error);
      } else {
        console.log('Coordinates:', data);
      }
    });
});

