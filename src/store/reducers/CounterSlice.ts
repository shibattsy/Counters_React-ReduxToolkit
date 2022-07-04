import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICounter } from '../../models/ICounter';
import { v4 as uuidv4 } from 'uuid';

interface CounterState {
  counters: ICounter[];
}

const initialState: CounterState = {
  counters: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    createCounter(state) {
      let score: number = 0;
      for (let el of state.counters) {
        score += el.score;
      }
      state.counters.push({ id: uuidv4(), score });
    },
    deleteCounter(state, action: PayloadAction<string>) {
      state.counters.splice(
        state.counters.findIndex((el) => el.id === action.payload),
        1
      );
    },
    increment(state, action: PayloadAction<string>) {
      state.counters.forEach((item) => {
        if (item.id === action.payload) {
          item.score++;
        }
      });
    },
    decrement(state, action: PayloadAction<string>) {
      state.counters.forEach((item) => {
        if (item.id === action.payload) {
          item.score--;
        }
      });
    },
  },
});

export default counterSlice.reducer;
