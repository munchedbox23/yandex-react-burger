import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { IWsOrder, IWsOrders } from "../../../types/order-types";
import {
  wsUserOrdClosed,
  wsUserOrdGetMessage,
  wsUserOrdError,
  wsUserOrdOpenSuccess,
} from "./actions";

export type TUserOrdersState = {
  wsConnected: boolean;
  orders: IWsOrder[];
  error: string | null;
  orderResponse: IWsOrders | null;
};

export const initialState: TUserOrdersState = {
  wsConnected: false,
  orders: [],
  error: null,
  orderResponse: null,
};

export const userOrdersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(wsUserOrdOpenSuccess, (state) => {
      state.wsConnected = true;
      state.error = null;
    })
    .addCase(wsUserOrdClosed, (state) => {
      state.wsConnected = false;
    })
    .addCase(
      wsUserOrdGetMessage,
      (state, { payload }: PayloadAction<IWsOrders>) => {
        state.orderResponse = payload;
        state.orders = payload.orders;
      }
    )
    .addCase(wsUserOrdError, (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    });
});
