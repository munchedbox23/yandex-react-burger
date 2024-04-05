import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { BASE_URL, LOAD_ENDPOINT} from "../../../utils/constants";
import { request } from "../../../utils/requests";

const initialState = {
  ingredients: [],
  getIngredientsRequest: false,
  getIngredientsFailed: false
};

export const getIngredients = createAsyncThunk('ingredients/getIngredients', async (_, {rejectWithValue, dispatch}) => {
  const response = await request(`${BASE_URL}${LOAD_ENDPOINT}`);
  dispatch(setIngredients(response.data))
})

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    setIngredients: (state, action) => {
      state.ingredients = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getIngredients.pending, (state) => {
      state.getIngredientsRequest = true;
    })
    .addCase(getIngredients.fulfilled, (state) => {
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
