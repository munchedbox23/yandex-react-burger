import { configureStore } from "@reduxjs/toolkit";
import ingredientsSlice from "../features/ingredients/ingredientsSlice";
import modalIngredientSlice from "../features/modalIngredient/modalIngredientSlice";
import burgerConstructorSlice from "../features/constructor/burgerConstructorSlice";
import orderPostSlice from "../features/orderPost/orderPostSlice";
import userSlice from "../features/user/userSlice";
import { feedOrdersReducer } from "../features/feedOrders/reducer";
import { userOrdersReducer } from "../features/userOrders/reducer";
import {
  feedOrdersMiddleware,
  userOrdersMiddleware,
} from "../middlewares/ws-middleware";

export const store = configureStore({
  reducer: {
    ingredients: ingredientsSlice,
    modalIngredient: modalIngredientSlice,
    burgerConstructor: burgerConstructorSlice,
    postOrder: orderPostSlice,
    user: userSlice,
    feedOrders: feedOrdersReducer,
    userOrders: userOrdersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(feedOrdersMiddleware, userOrdersMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
