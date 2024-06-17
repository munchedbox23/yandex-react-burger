import { ingredient1 } from "../../../utils/mock";
import reducer, {
  initialState,
  setDetailIngredient,
} from "./modalIngredientSlice";

describe("modal ingredient slice", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  it("should set ingredient as modal ingredient", () => {
    expect(reducer(initialState, setDetailIngredient(ingredient1))).toEqual({
      ...initialState,
      detailIngredient: ingredient1,
    });
  });
});
