import {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
  Middleware,
} from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { refreshToken } from "../../utils/requests";

type TActionOptions = {
  wsConnect: ActionCreatorWithPayload<string>;
  wsDisconnect: ActionCreatorWithoutPayload;
  wsOpen: ActionCreatorWithoutPayload;
  wsClose: ActionCreatorWithoutPayload;
  wsError: ActionCreatorWithPayload<string>;
  wsMessage: ActionCreatorWithPayload<any>;
};

export const socketMiddleware =
  (wsOptions: TActionOptions): Middleware<{}, RootState> =>
  (store) => {
    let socket: WebSocket | null = null;
    const { wsConnect, wsClose, wsMessage, wsError, wsOpen, wsDisconnect } =
      wsOptions;

    return (next) => (action) => {
      const { dispatch } = store;

      if (wsConnect.match(action)) {
        socket = new WebSocket(action.payload);
      }

      if (socket) {
        socket.onopen = () => dispatch(wsOpen());

        socket.onclose = () => dispatch(wsClose());

        socket.onerror = () => dispatch(wsError("Oops! Check the connection"));

        socket.onmessage = (event: MessageEvent) => {
          try {
            const { data } = event.data;
            const payloadData = JSON.parse(data);

            if (payloadData.message === "Invalid or missing token") {
              refreshToken();
            } else {
              dispatch(wsMessage(payloadData));
            }
          } catch (error) {
            throw new Error(
              `Error! There's been an trouble with message. ${error}`
            );
          }
        };
        if (wsDisconnect.match(action)) {
          socket.close();
          socket = null;
        }
      }
      next(action);
    };
  };
