import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { giphsAPI } from './../API/api';

export const fetchGiphs = createAsyncThunk(
  'gifs/fetchGiphs',
  async ({ query, offset }) => {
    const response = await giphsAPI.getGiphs(query, offset);
    return response.data.data; // возвращаем данные с гифками
  }
);

const giphsSlice = createSlice({
  name: 'giphs',
  initialState: {
    giphs: [],
    query: '',
    offset: 0,
    loading: false,
    error: null,
  },
  reducers: {
    setNewQuery: (state, action) => {
      state.giphs = [];
      state.query = action.payload;
      state.offset = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGiphs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGiphs.fulfilled, (state, action) => {
        state.loading = false;
        state.giphs = [...state.giphs, ...action.payload];
        state.offset += 12; // увеличиваем offset
      })
      .addCase(fetchGiphs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setNewQuery } = giphsSlice.actions;
export default giphsSlice.reducer;
