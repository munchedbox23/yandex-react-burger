import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { request } from "../../../utils/requests";
import { API } from "../../../utils/constants";

const initialState = {
  ingredients: [],
  getIngredientsRequest: false,
  getIngredientsFailed: false
};

export const getIngredients = createAsyncThunk('ingredients/getIngredients', async () => {
  const response = await request(`${API.baseUrl}${API.endpoints.ingredients}`);
  return response.data;
})

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getIngredients.pending, (state) => {
      state.getIngredientsRequest = true;
    })
    .addCase(getIngredients.fulfilled, (state, action) => {
      state.ingredients = action.payload;
      state.getIngredientsRequest = false;
      state.getIngredientsFailed = false;
    })
    .addCase(getIngredients.rejected, (state) => {
      state.getIngredientsRequest = false;
      state.getIngredientsFailed = true;
    })
  }
});

export const {} = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
