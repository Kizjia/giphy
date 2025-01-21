import { configureStore } from '@reduxjs/toolkit';
import giphsReducer from './giphsSlice';
import randomReducer from './randomSlice';
import trendReducer from './trendSlice';

export const store = configureStore({
  reducer: {
    giph: giphsReducer,
    random: randomReducer,
    trend: trendReducer,
  },
});
