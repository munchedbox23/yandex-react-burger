import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedBun: null,
  selectedIngredients: [],
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
      state.selectedIngredients = state.selectedIngredients.filter((item) => item.id !== action.payload);
    },
    resetConstructor: (state, action) => {
      state.selectedBun = null;
      state.selectedIngredients = [];
    }, 
  }
});

export const {setBun, setIngredients, removIngredient, resetConstructor} = burgerConstructorSlice.actions;
export default burgerConstructorSlice.reducer;
