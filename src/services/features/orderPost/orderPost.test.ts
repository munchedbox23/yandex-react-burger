import reducer, { handleAndPlaceOrder, initialState } from "./orderPostSlice";
import { mockOrder } from "../../../utils/mock";

describe("testing orderPost slice", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  it("should handle handleAndPlaceOrder.pending", () => {
    expect(
      reducer(initialState, {
        type: handleAndPlaceOrder.pending.type,
      })
    ).toEqual({
      ...initialState,
      postRequest: true,
    });
  });

  it("should handle handleAndPlaceOrder.fulfilled", () => {
    expect(
      reducer(initialState, {
        type: handleAndPlaceOrder.fulfilled.type,
        payload: mockOrder,
      })
    ).toEqual({
      orderList: mockOrder,
      postFailed: false,
      postRequest: false,
    });
  });

  it("should handle handleAndPlaceOrder.rejected", () => {
    expect(
      reducer(initialState, {
        type: handleAndPlaceOrder.rejected.type,
      })
    ).toEqual({
      ...initialState,
      postFailed: true,
      postRequest: false,
    });
  });
});
