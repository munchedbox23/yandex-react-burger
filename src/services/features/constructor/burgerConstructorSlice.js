import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedBun: null,
  selectedIngredients: [],
  totalPrice: 0
};

export const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState,
  reducers: {
    setBun: (state, action) => {
      state.selectedBun = action.payload
    },
    setIngredients: (state, action) => {
      state.selectedIngredients.push(action.payload);
    },
    removIngredient: (state, action) => {
      state.selectedIngredients = state.selectedIngredients.filter((item) => item.idx !== action.payload);
    },
    resetConstructor: (state, action) => {
      state.selectedBun = null;
      state.selectedIngredients = [];
    },
    calcTotalPrice: (state, action) => {
      state.totalPrice = (state.selectedBun ? state.selectedBun.price * 2 : 0) + (state.selectedIngredients?.reduce((acc, ingredient) => acc + ingredient.price, 0)); 
    }
  }
});

export const {setBun, setIngredients, removIngredient, resetConstructor, calcTotalPrice} = burgerConstructorSlice.actions;
export default burgerConstructorSlice.reducer;
