import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IAppReducerState {
  value: number;
  selectedNav: string;
}

const initialState: IAppReducerState = {
  value: 0,
  selectedNav: 'home',
};

export const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    handleSelectedNavChange: (state, action: PayloadAction<string>) => {
      state.selectedNav = action.payload;
    },
  },
});

export const { increment, decrement, handleSelectedNavChange } =
  appReducer.actions;

export default appReducer.reducer;
