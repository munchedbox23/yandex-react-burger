import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { IWsOrder, IWsOrders } from "../../../types/order-types";
import {
  wsOrdersConnectionClosed,
  wsOrdersConnectionOpenSuccess,
  wsOrdersConnectionError,
  wsOrdersConnectionStart,
  wsOrdersGetMessage,
} from "./actions";

export type TUserOrdersState = {
  wsConnected: boolean;
  orders: IWsOrder[];
  error: string | null;
  wsStatus: string;
};

const initialState: TUserOrdersState = {
  wsConnected: false,
  orders: [],
  error: null,
  wsStatus: "",
};

export const allOrdersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(wsOrdersConnectionStart, (state) => {
      state.wsStatus = "Connecting";
    })
    .addCase(wsOrdersConnectionOpenSuccess, (state) => {
      state.wsConnected = true;
      state.error = null;
      state.wsStatus = "Connecting Success";
    })
    .addCase(wsOrdersConnectionClosed, (state) => {
      state.wsConnected = false;
      state.wsStatus = "Connection Closed";
    })
    .addCase(
      wsOrdersGetMessage,
      (state, { payload }: PayloadAction<IWsOrders>) => {
        state.orders = payload.orders;
        state.error = null;
      }
    )
    .addCase(
      wsOrdersConnectionError,
      (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.wsStatus = "Connection Error";
      }
    );
});
