import { configureStore } from "@reduxjs/toolkit";
import ingredientsSlice from "../features/ingredients/ingredientsSlice";
import modalIngredientSlice from "../features/modalIngredient/modalIngredientSlice";
import burgerConstructorSlice from "../features/constructor/burgerConstructorSlice";
import orderPostSlice from "../features/orderPost/orderPostSlice";

export const store = configureStore({
  reducer: {
    ingredients: ingredientsSlice,
    modalIngredient: modalIngredientSlice,
    burgerConstructor: burgerConstructorSlice,
    postOrder: orderPostSlice
  }
});
