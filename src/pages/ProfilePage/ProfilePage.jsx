import styles from "./ProfilePage.module.css";
import { Outlet } from "react-router-dom";
import { ProfileTabs } from "../../components/Profile/ProfileTabs/ProfileTabs";

export const ProfilePage = () => {
  return (
    <div className={`${styles.profileWrapper} pl-4`}>
      <ProfileTabs />
      <Outlet />
    </div>
  );
};
