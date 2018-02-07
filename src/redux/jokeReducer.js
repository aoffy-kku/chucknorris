const initialState = {
  loading: false,
  data: [],
  firstname: 'Jhon',
  lastname: 'Snow',
  count: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FIRSTNAME':
      state = { ...state, firstname: action.payload };
      return state;
    case 'SET_LASTNAME':
      state = { ...state, lastname: action.payload };
      return state;
    case 'SET_COUNT':
      state = { ...state, count: action.payload };
      return state;
    case 'FECT_JOKE_PENDING':
      state = { ...state, loading: true };
      return state;
    case 'FECT_JOKE_FULFILLED':
      state = { ...state, loading: false, data: action.payload.data.value };
      return state;
    default:
      return state;
  }
};
