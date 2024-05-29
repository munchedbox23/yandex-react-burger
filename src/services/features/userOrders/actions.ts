import { createAction } from "@reduxjs/toolkit";
import { IWsOrders } from "../../../types/order-types";

export const wsUserOrdConnect = createAction<string, "WS_USER_ORD_CONNECT">(
  "WS_USER_ORD_CONNECT"
);

export const wsUserOrdDisconnect = createAction("WS_USER_ORD_DISCONNECT");

export const wsUserOrdOpenSuccess = createAction("WS_USER_ORD_OPEN_SUCCESS");
export const wsUserOrdClosed = createAction("WS_USER_ORD_CLOSED");

export const wsUserOrdGetMessage = createAction<
  IWsOrders,
  "WS_USER_ORD_GET_MESSAGE"
>("WS_USER_ORD_GET_MESSAGE");

export const wsUserOrdError = createAction<string, "WS_USER_ORD_ERROR">(
  "WS_USER_ORD_ERROR"
);

export type TUserOrderAction =
  | ReturnType<typeof wsUserOrdConnect>
  | ReturnType<typeof wsUserOrdDisconnect>
  | ReturnType<typeof wsUserOrdOpenSuccess>
  | ReturnType<typeof wsUserOrdGetMessage>
  | ReturnType<typeof wsUserOrdError>;
