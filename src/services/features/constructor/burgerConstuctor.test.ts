import reducer, {
  calcTotalPrice,
  initialState,
  moveCard,
  removeIngredient,
  resetConstructor,
  setBun,
  setIngredients,
} from "./burgerConstructorSlice";
import {
  ingredient1,
  mockBun,
  ingredient2,
  ingredient3,
} from "../../../utils/mock";

describe("testing ingredients constructor", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  it("should set some bun to the constructor", () => {
    expect(reducer(initialState, setBun(mockBun))).toEqual({
      ...initialState,
      selectedBun: mockBun,
    });
  });

  it("should set some ingredients to the constructor", () => {
    const expectedState = {
      ...initialState,
      selectedIngredients: [...initialState.selectedIngredients, ingredient1],
    };
    expect(reducer(initialState, setIngredients(ingredient1))).toEqual(
      expectedState
    );
  });

  it("should remove ingredient", () => {
    expect(reducer(initialState, removeIngredient("test-id"))).toEqual(
      initialState
    );
  });

  it("should reset constructor", () => {
    expect(reducer(initialState, resetConstructor())).toEqual({
      ...initialState,
      selectedBun: null,
      selectedIngredients: [],
    });
  });

  it("should calculate the total price of the constructor", () => {
    const stateWithBunAndIngredients = {
      ...initialState,
      selectedBun: mockBun,
      selectedIngredients: [ingredient1, ingredient2],
    };
    const expectedTotalPrice =
      mockBun.price * 2 + ingredient1.price + ingredient2.price;
    const stateAfterCalcTotalPrice = reducer(
      stateWithBunAndIngredients,
      calcTotalPrice()
    );

    expect(stateAfterCalcTotalPrice.totalPrice).toEqual(expectedTotalPrice);
  });

  it("should calculate the total price of the constructor", () => {
    const state = {
      ...initialState,
      selectedIngredients: [ingredient1, ingredient2, ingredient3],
    };

    expect(reducer(state, moveCard({ dragIndex: 0, hoverIndex: 1 }))).toEqual({
      ...initialState,
      selectedIngredients: [ingredient2, ingredient1, ingredient3],
    });
  });
});
