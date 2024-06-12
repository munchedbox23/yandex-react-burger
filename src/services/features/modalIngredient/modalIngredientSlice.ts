import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IIngredient,
  IIngredientsWithIdx,
} from "./../../../types/ingredient-types";

type TDetailIngredient = {
  detailIngredient: IIngredient | IIngredientsWithIdx | null;
};

export const initialState: TDetailIngredient = {
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
