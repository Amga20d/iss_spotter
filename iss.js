const needle = require('needle');

const fetchMyIP = function(callback) {
  const url = 'https://api.ipify.org?format=json';

  needle.get(url, (error, response) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${response.body}`;
        callback(Error(msg), null);
        return;
    }
    const ip = response.body.ip;
    callback(null, ip);
  });
};
 
const fetchCoordsByIP = function(ip, callback) {
  const url = `https://ipwho.is/${ip}`;

  needle.get(url, (error, response) => {
    if (error) {
      callback(error, null);
      return;
    }

    const data = response.body;
    if (data.success) {
      const coordinates = {
        latitude: data.latitude,
        longitude: data.longitude
      };
      callback(null, coordinates);
    } else {
      callback('Failed to retrieve coordinates', null);
    }
  });
};

 
const fetchISSFlyOverTimes = function(coords, callback) {
  const url = `https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;

  needle.get(url, (error, response) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching ISS pass times: ${response.body}`), null);
      return;
    }

    const flyoverTimes = response.body.response;
    callback(null, flyoverTimes);
  });
};

module.exports = { fetchISSFlyOverTimes };




module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
