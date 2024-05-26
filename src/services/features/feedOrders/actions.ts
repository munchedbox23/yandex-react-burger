import { createAction } from "@reduxjs/toolkit";
import { IWsOrders } from "../../../types/order-types";

export const wsOrdersConnectionStart = createAction(
  "WS_ORDERS_CONNECTION_START"
);
export const wsOrdersDisconnect = createAction("WS_ORDERS_DISSCONNECT");
export const wsOrdersConnectionOpenSuccess = createAction(
  "WS_ORDERS_CONNECTION_OPEN_SUCCESS"
);
export const wsOrdersConnectionClosed = createAction(
  "WS_ORDERS_CONNECTION_CLOSED"
);
export const wsOrdersConnectionError = createAction<
  string,
  "WS_ORDERS_CONNECTION_ERROR"
>("WS_ORDERS_CONNECTION_ERROR");

export const wsOrdersGetMessage = createAction<
  IWsOrders,
  "WS_ORDERS_GET_MESSAGE"
>("WS_ORDERS_GET_MESSAGE");

export type TUserOrdersActions =
  | ReturnType<typeof wsOrdersConnectionStart>
  | ReturnType<typeof wsOrdersConnectionOpenSuccess>
  | ReturnType<typeof wsOrdersConnectionClosed>
  | ReturnType<typeof wsOrdersConnectionError>
  | ReturnType<typeof wsOrdersGetMessage>
  | ReturnType<typeof wsOrdersDisconnect>;
