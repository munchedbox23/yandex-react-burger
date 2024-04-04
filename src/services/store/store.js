import { configureStore } from "@reduxjs/toolkit";
import ingredientsSlice from "../features/ingredients/ingredientsSlice";

export const store = configureStore({
  reducer: {
    ingredients: ingredientsSlice
  }
});
