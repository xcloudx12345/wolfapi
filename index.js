const axios = require('axios');
axios('http://besim.herokuapp.com/users/612be11a35902e0023cb418f', {
  headers: {
    'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTJiZTExYTM1OTAyZTAwMjNjYjQxOGYiLCJpYXQiOjE2MzAzMTgxNjN9.hJodbqfBXpYEgNdzHqzjjrp2oKxTm6bsfWZGEzrd9b0'
  }
  }
).then((res) => {
  console.log(res.data);
}).catch((error) => {
  console.error(error)
});
axios.post()