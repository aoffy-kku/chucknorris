import axios from 'axios';

const setFirstname = firstname => ({
  type: 'SET_FIRSTNAME',
  payload: firstname,
});

const setLastname = lastname => ({
  type: 'SET_LASTNAME',
  payload: lastname,
});

const setCount = count => ({
  type: 'SET_COUNT',
  payload: count,
});

const getJoke = (firstname, lastname, count) => ({
  type: 'FECT_JOKE',
  payload: axios.get(`http://api.icndb.com/jokes/random/${count}?firstName=${firstname}&lastName=${lastname}`),
});

export {
  setCount,
  setFirstname,
  setLastname,
  getJoke,
};
