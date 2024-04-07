import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { BASE_URL, LOAD_ENDPOINT} from "../../../utils/constants";
import { request } from "../../../utils/requests";

const initialState = {
  ingredients: [],
  getIngredientsRequest: false,
  getIngredientsFailed: false
};

export const getIngredients = createAsyncThunk('ingredients/getIngredients', async () => {
  const response = await request(`${BASE_URL}${LOAD_ENDPOINT}`);
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

export const { setIngredients } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
