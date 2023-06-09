import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: '',
  q1: '',
  q2: '',
  q3: '',
  q4: '',
  q5: '',
  q6: '',
  q7: [],
  ok: false,
  color: 0,
};
const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setQ1(state, action) {
      state.q1 = action.payload;
    },
    setQ2(state, action) {
      state.q2 = action.payload;
    },
    setQ3(state, action) {
      state.q3 = action.payload;
    },
    setQ4(state, action) {
      state.q4 = action.payload;
    },
    setQ5(state, action) {
      state.q5 = action.payload;
    },
    setQ6(state, action) {
      state.q6 = action.payload;
    },
    setQ7(state, action) {
      state.q7 = action.payload;
    },
    setColor(state, action) {
      state.color = action.payload;
    },
    setOk(state, action) {
      state.ok = action.payload;
    },
  },
  extraReducers: builder => {},
});

export default user;
