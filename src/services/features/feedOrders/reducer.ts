import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import {
  wsOrdersClosed,
  wsOrdersError,
  wsOrdersGetMessage,
  wsOrdersOpenSuccess,
} from "./actions";
import { IWsOrder, IWsOrders } from "../../../types/order-types";

export type TFeedOrdersState = {
  wsConnected: boolean;
  orders: IWsOrder[];
  error: string | null;
  orderResponse: IWsOrders | null;
};

const initialState: TFeedOrdersState = {
  wsConnected: false,
  orders: [],
  orderResponse: null,
  error: null,
};

export const feedOrdersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(wsOrdersOpenSuccess, (state) => {
      state.wsConnected = true;
      state.error = null;
    })
    .addCase(wsOrdersClosed, (state) => {
      state.wsConnected = false;
    })
    .addCase(
      wsOrdersGetMessage,
      (state, { payload }: PayloadAction<IWsOrders>) => {
        state.orderResponse = payload;
        state.orders = payload.orders;
      }
    )
    .addCase(wsOrdersError, (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    });
});
