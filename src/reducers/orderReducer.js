export const orderReducer = (state, action) => {
  const {selectedBun, selectedIngredients} = state;
  const newOrderItem = {
    _id: action._id,
    name: action.name,
    price: action.price,
    image: action.image,
    type: action.type
  };

  const updatedSelectedIngredients = selectedIngredients.filter((ingredient) => ingredient._id !== action.ingredientId);
  
  switch(action.type) {
    case 'set':
      if(action.ingredientType !== 'bun') {
        return {...state, selectedIngredients: [...selectedIngredients, newOrderItem]};
      } else {
        return {...state, selectedBun: newOrderItem};
      }
    case 'reset':
      return {selectedBun: null, selectedIngredients: []};
    case 'delete':
      return {selectedBun, selectedIngredients: updatedSelectedIngredients}
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
};

