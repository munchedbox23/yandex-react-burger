import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { IWsOrder, IWsOrders } from "../../../types/order-types";
import {
  wsUserOrdConnectionClosed,
  wsUserOrdConnectionError,
  wsUserOrdConnectionOpenSuccess,
  wsUserOrdConnectionStart,
  wsUserOrdGetMessage,
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

export const userOrdersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(wsUserOrdConnectionStart, (state) => {
      state.wsStatus = "Connecting";
    })
    .addCase(wsUserOrdConnectionOpenSuccess, (state) => {
      state.wsConnected = true;
      state.error = null;
      state.wsStatus = "Connecting Success";
    })
    .addCase(wsUserOrdConnectionClosed, (state) => {
      state.wsConnected = false;
      state.wsStatus = "Connection Closed";
    })
    .addCase(
      wsUserOrdGetMessage,
      (state, { payload }: PayloadAction<IWsOrders>) => {
        state.orders = payload.orders;
        state.error = null;
      }
    )
    .addCase(
      wsUserOrdConnectionError,
      (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.wsStatus = "Connection Error";
      }
    );
});
