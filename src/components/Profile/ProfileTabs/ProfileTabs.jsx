import styles from "./ProfileTabs.module.css";
import { ProfileTab } from "./ProfileTab/ProfileTab";
import { ROUTE } from "../../../utils/constants";
import { v4 as uuidv4 } from "uuid";

export const ProfileTabs = () => {
  const profileTabs = [
    { name: "Профиль", route: `/profile` },
    {
      name: "История заказов",
      route: `${ROUTE.userProfile.orders}`,
    },
  ];
  return (
    <div className={styles.tabsContainer}>
      <ul className={styles.profileTabs}>
        {profileTabs.map((tab) => (
          <ProfileTab
            key={uuidv4()}
            route={tab.route}
            className="pt-3 pb-3"
            text={tab.name}
          />
        ))}
        <li className="pt-3">
          <button type="button" className={styles.btn}>
            Выйти
          </button>
        </li>
      </ul>
      <p className="text text_type_main-default text_color_inactive">
        В этом разделе вы можете <br></br> изменить свои персональные данные
      </p>
    </div>
  );
};
