import { FC, useEffect } from "react";
import styles from "./ProfileOrders.module.css";
import {
  wsUserOrdConnect as connect,
  wsUserOrdDisconnect as disconnect,
} from "../../../services/features/userOrders/actions";
import { useAppDispatch, useAppSelector } from "../../../services/store/hooks";
import { WEBSOCKET_API } from "../../../utils/constants";
import { cookies } from "../../../services/features/user/auth";
import { OrderFeed } from "../../OrderFeed/OrderFeed";

export const ProfileOrders: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      connect(
        `${WEBSOCKET_API.baseUrl}${
          WEBSOCKET_API.endpoints.profileOrders
        }?token=${cookies.get("accessToken")}`
      )
    );
  }, [dispatch]);

  const userOrders = useAppSelector((store) => store.userOrders.orders);

  return (
    <div className={styles.profileOrders}>
      <OrderFeed hasStatus={true} data={[...userOrders].reverse()} />
    </div>
  );
};
