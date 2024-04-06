import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedBun: null,
  selectedIngredients: [],
  totalPrice: 0,
};

export const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState,
  reducers: {
    setBun: (state, action) => {
      state.selectedBun = action.payload;
    },
    setIngredients: (state, action) => {
      state.selectedIngredients = [...state.selectedIngredients, action.payload];
      state.selectedIngredients = state.selectedIngredients.map((item) =>
      item.id === action.payload.id ? { ...item, __v: (item.__v || 0) + 1 } : item
    );
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
    },
    moveCard: (state, action) => {
      const { dragIndex, hoverIndex } = action.payload;
      const temp = state.selectedIngredients[dragIndex];
      state.selectedIngredients = state.selectedIngredients.filter((item, idx) => idx !== dragIndex);
      state.selectedIngredients.splice(hoverIndex, 0, temp);
    }
  }
});

export const {setBun, setIngredients, removIngredient, resetConstructor, calcTotalPrice, moveCard} = burgerConstructorSlice.actions;
export default burgerConstructorSlice.reducer;
