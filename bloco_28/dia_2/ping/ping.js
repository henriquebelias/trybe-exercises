const axios = require('axios');

axios
  .get('http://localhost:3000/ping/')
  .then((response) => {
    console.log('data - ', response.data);
    console.log('--------------------------------');
    console.log('status - ', response.status);
  })
  .catch((error) => {
    console.log('error - ', error.message);
  });

/*
GET

axios.get('/user', {
  params: {
    ID: 12345
  }
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

const getUser = async () => {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
*/

/*
POST

const body = {
  firstName: 'Fred',
  lastName: 'Flintstone'
};

axios.post('/user', body)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
*/
