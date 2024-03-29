export const totalPriceReducer = ({total}, action) => {
  switch (action.type) {
    case "add":
      if(action.ingredientType !== 'bun') {
        return {total: total + action.price};
      } else {
        return {total: total + 2 * action.price};
      }
    case "subtract":
      if(action.ingredientType !== 'bun') {
        return {total: total - action.price};
      } else {
        return {total: total - 2 * action.price};
      }
    case "reset":
      return {total: 0};
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
};
