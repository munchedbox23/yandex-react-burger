import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailIngredient: null
};

const modalIngredientSlice = createSlice({
  name: 'modalIngredient',
  initialState,
  reducers: {
    setDetailIngredient: (state, action) => {
      state.detailIngredient = action.payload
    }
  }
});

export const {setDetailIngredient} = modalIngredientSlice.actions;
export default modalIngredientSlice.reducer;
