import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IIngredient } from "./../../../types/ingredient-types";

type TDetailIngredient = {
  detailIngredient: IIngredient | null;
};

const initialState: TDetailIngredient = {
  detailIngredient: null,
};

const modalIngredientSlice = createSlice({
  name: "modalIngredient",
  initialState,
  reducers: {
    setDetailIngredient: (state, action: PayloadAction<IIngredient>) => {
      state.detailIngredient = action.payload;
    },
  },
});

export const { setDetailIngredient } = modalIngredientSlice.actions;
export default modalIngredientSlice.reducer;
