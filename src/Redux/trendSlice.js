import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { giphsAPI } from './../API/api';

export const getTrendingGiphs = createAsyncThunk(
  'trend/getTrendingGiphs',
  async (offset) => {
    const response = await giphsAPI.getTrendingGiphs(offset);
    return response.data.data; // возвращаем данные с гифками
  }
);

const trendSlice = createSlice({
  name: 'trend',
  initialState: {
    trendGiphs: [],
    offset: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrendingGiphs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTrendingGiphs.fulfilled, (state, action) => {
        state.loading = false;
        state.trendGiphs = [...state.trendGiphs, ...action.payload];
        state.offset += 12; // увеличиваем offset
      })
      .addCase(getTrendingGiphs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default trendSlice.reducer;
