import { configureStore } from "@reduxjs/toolkit";
import ingredientsSlice from "../features/ingredients/ingredientsSlice";
import modalIngredientSlice from "../features/modalIngredient/modalIngredientSlice";
import burgerConstructorSlice from "../features/constructor/burgerConstructorSlice";

export const store = configureStore({
  reducer: {
    ingredients: ingredientsSlice,
    modalIngredient: modalIngredientSlice,
    burgerConstructor: burgerConstructorSlice
  }
});
