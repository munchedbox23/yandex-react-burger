import { createAction } from "@reduxjs/toolkit";
import { IWsOrders } from "../../../types/order-types";

export const wsOrdersConnect = createAction<string, "WS_ORDERS_CONNECT">(
  "WS_ORDERS_CONNECT"
);

export const wsOrdersDisconnect = createAction("WS_ORDERS_DISCONNECT");

export const wsOrdersOpenSuccess = createAction("WS_ORDERS_OPEN_SUCCESS");
export const wsOrdersClosed = createAction("WS_ORDERS_CLOSED");

export const wsOrdersGetMessage = createAction<
  IWsOrders,
  "WS_ORDERS_GET_MESSAGE"
>("WS_ORDERS_GET_MESSAGE");

export const wsOrdersError = createAction<string, "WS_ORDERS_ERROR">(
  "WS_ORDERS_ERROR"
);

export type TUserOrderAction =
  | ReturnType<typeof wsOrdersConnect>
  | ReturnType<typeof wsOrdersDisconnect>
  | ReturnType<typeof wsOrdersOpenSuccess>
  | ReturnType<typeof wsOrdersGetMessage>
  | ReturnType<typeof wsOrdersError>;
