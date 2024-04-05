import { configureStore } from "@reduxjs/toolkit";
import ingredientsSlice from "../features/ingredients/ingredientsSlice";
import modalIngredientSlice from "../features/modalIngredient/modalIngredientSlice";

export const store = configureStore({
  reducer: {
    ingredients: ingredientsSlice,
    modalIngredient: modalIngredientSlice,
  }
});
