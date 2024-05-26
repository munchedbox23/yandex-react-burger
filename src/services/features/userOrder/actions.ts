import { createAction } from "@reduxjs/toolkit";
import { IWsOrders } from "../../../types/order-types";

export const wsUserOrdConnectionStart = createAction(
  "WS_USER_ORD_CONNECTION_START"
);
export const wsUserOrdDisconnect = createAction("WS_USER_ORD_DISCONNECT");
export const wsUserOrdConnectionOpenSuccess = createAction(
  "WS_USER_ORD_CONNECTION_OPEN_SUCCESS"
);
export const wsUserOrdConnectionClosed = createAction(
  "WS_USER_ORD_CONNECTION_CLOSED"
);
export const wsUserOrdConnectionError = createAction<
  string,
  "WS_USER_ORD_CONNECTION_ERROR"
>("WS_USER_ORD_CONNECTION_ERROR");

export const wsUserOrdGetMessage = createAction<
  IWsOrders,
  "WS_USER_ORD_GET_MESSAGE"
>("WS_USER_ORD_GET_MESSAGE");

export type TUserOrdersActions =
  | ReturnType<typeof wsUserOrdConnectionStart>
  | ReturnType<typeof wsUserOrdConnectionClosed>
  | ReturnType<typeof wsUserOrdConnectionOpenSuccess>
  | ReturnType<typeof wsUserOrdConnectionError>
  | ReturnType<typeof wsUserOrdGetMessage>
  | ReturnType<typeof wsUserOrdDisconnect>;
