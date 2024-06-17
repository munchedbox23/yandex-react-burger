import { mockIngredients } from "../../../utils/mock";
import reducer, { initialState, getIngredients } from "./ingredientsSlice";

describe("ingredients reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  it("should handle getIngredients.pending", () => {
    expect(
      reducer(initialState, {
        type: getIngredients.pending.type,
      })
    ).toEqual({
      ...initialState,
      getIngredientsRequest: true,
    });
  });

  it("should handle getIngredients.fulfilled", () => {
    expect(
      reducer(initialState, {
        type: getIngredients.fulfilled.type,
        payload: mockIngredients,
      })
    ).toEqual({
      ...initialState,
      ingredients: mockIngredients,
      getIngredientsRequest: false,
      getIngredientsFailed: false,
    });
  });

  it("should handle getIngredients.rejected", () => {
    expect(
      reducer(initialState, {
        type: getIngredients.rejected.type,
      })
    ).toEqual({
      ...initialState,
      getIngredientsRequest: false,
      getIngredientsFailed: true,
    });
  });
});
