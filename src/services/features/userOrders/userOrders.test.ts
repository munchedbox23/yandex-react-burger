import { userOrdersReducer, initialState, TUserOrdersState } from "./reducer";
import {
  wsUserOrdClosed,
  wsUserOrdError,
  wsUserOrdGetMessage,
  wsUserOrdOpenSuccess,
} from "./actions";
import { mockOrders } from "../../../utils/mock";

describe("userOrdersReducer tests", () => {
  it("should return the initial state", () => {
    expect(userOrdersReducer(undefined, { type: "" })).toEqual(initialState);
  });

  it("should handle wsUserOrdOpenSuccess", () => {
    const expectedState: TUserOrdersState = {
      ...initialState,
      wsConnected: true,
      error: null,
    };
    expect(userOrdersReducer(initialState, wsUserOrdOpenSuccess())).toEqual(
      expectedState
    );
  });

  it("should handle wsUserOrdClosed", () => {
    const stateWithConnection: TUserOrdersState = {
      ...initialState,
      wsConnected: true,
    };
    const expectedState: TUserOrdersState = {
      ...initialState,
      wsConnected: false,
    };
    expect(userOrdersReducer(stateWithConnection, wsUserOrdClosed())).toEqual(
      expectedState
    );
  });

  it("should handle wsUserOrdGetMessage", () => {
    const expectedState: TUserOrdersState = {
      ...initialState,
      orderResponse: mockOrders,
      orders: mockOrders.orders,
    };
    expect(
      userOrdersReducer(initialState, wsUserOrdGetMessage(mockOrders))
    ).toEqual(expectedState);
  });

  it("should handle wsUserOrdError", () => {
    const errorMessage = "An error occurred";
    const expectedState: TUserOrdersState = {
      ...initialState,
      error: errorMessage,
    };
    expect(
      userOrdersReducer(initialState, wsUserOrdError(errorMessage))
    ).toEqual(expectedState);
  });
});
