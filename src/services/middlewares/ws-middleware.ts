import {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
  Middleware,
} from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { refreshToken } from "../../utils/requests";

export type TActionsTypes = {
  wsConnect: ActionCreatorWithPayload<string>;
  wsDisconnect: ActionCreatorWithoutPayload;
  wsOpen: ActionCreatorWithoutPayload;
  wsClose: ActionCreatorWithoutPayload;
  wsError: ActionCreatorWithPayload<string>;
  wsMessage: ActionCreatorWithPayload<any>;
};

export const socketMiddleware =
  (wsOptions: TActionsTypes): Middleware<{}, RootState> =>
  (store) => {
    let socket: WebSocket | null = null;
    const { wsConnect, wsClose, wsDisconnect, wsOpen, wsError, wsMessage } =
      wsOptions;

    return (next) => (action) => {
      const { dispatch } = store;

      if (wsConnect.match(action)) {
        socket = new WebSocket(action.payload);
      }

      if (socket) {
        socket.onopen = () => dispatch(wsOpen());

        socket.onclose = () => dispatch(wsClose());

        socket.onerror = () =>
          dispatch(wsError("Oops! Connection has some error"));

        socket.onmessage = (event: MessageEvent) => {
          try {
            const { data } = event;
            const parsedData = JSON.parse(data);

            if (parsedData?.message === "Invalid or missing token") {
              refreshToken();
            } else {
              dispatch(wsMessage(parsedData));
            }
          } catch (error) {
            throw new Error(`Error! Something's wrong: ${error}`);
          }
        };

        if (socket && wsDisconnect.match(action)) {
          socket.close();
          socket = null;
        }
      }
      next(action);
    };
  };
