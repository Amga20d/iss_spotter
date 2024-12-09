const { fetchMyIP } = require('./iss');

fetchMyIP((error, ip) => {
    if (error) {
      console.error('Error fetching IP:', error);
      return;
    } else {
      console.log('Your IP address is:', ip);
    }
  });
  