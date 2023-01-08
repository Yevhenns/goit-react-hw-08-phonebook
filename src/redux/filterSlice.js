import { createSlice } from '@reduxjs/toolkit';

const initialState = { filter: '', isLoading: false, error: null };

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,

  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;
