import { feedOrdersReducer, initialState, TFeedOrdersState } from "./reducer";
import {
  wsOrdersClosed,
  wsOrdersError,
  wsOrdersGetMessage,
  wsOrdersOpenSuccess,
} from "./actions";
import { mockOrders } from "../../../utils/mock";

describe("feedOrdersReducer tests", () => {
  it("should return the initial state", () => {
    expect(feedOrdersReducer(undefined, { type: "" })).toEqual(initialState);
  });

  it("should handle wsOrdersOpenSuccess", () => {
    const expectedState: TFeedOrdersState = {
      ...initialState,
      wsConnected: true,
      error: null,
    };
    expect(feedOrdersReducer(initialState, wsOrdersOpenSuccess())).toEqual(
      expectedState
    );
  });

  it("should handle wsOrdersClosed", () => {
    const stateWithConnection: TFeedOrdersState = {
      ...initialState,
      wsConnected: true,
    };
    const expectedState: TFeedOrdersState = {
      ...initialState,
      wsConnected: false,
    };
    expect(feedOrdersReducer(stateWithConnection, wsOrdersClosed())).toEqual(
      expectedState
    );
  });

  it("should handle wsOrdersGetMessage", () => {
    const expectedState: TFeedOrdersState = {
      ...initialState,
      orderResponse: mockOrders,
      orders: mockOrders.orders,
    };
    expect(
      feedOrdersReducer(initialState, wsOrdersGetMessage(mockOrders))
    ).toEqual(expectedState);
  });

  it("should handle wsOrdersError", () => {
    const errorMessage = "An error occurred";
    const expectedState: TFeedOrdersState = {
      ...initialState,
      error: errorMessage,
    };
    expect(
      feedOrdersReducer(initialState, wsOrdersError(errorMessage))
    ).toEqual(expectedState);
  });
});
