import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { giphsAPI } from './../API/api';

export const getRandomGiph = createAsyncThunk(
  'random/getRandomGiph',
  async () => {
    const response = await giphsAPI.getRandomGiph();
    console.log(response.data.data);
    return response.data.data; // возвращаем данные с гифками
  }
);

const randomSlice = createSlice({
  name: 'random',
  initialState: {
    randomGiph: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomGiph.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRandomGiph.fulfilled, (state, action) => {
        state.loading = false;
        state.randomGiph = action.payload;
      })
      .addCase(getRandomGiph.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default randomSlice.reducer;
