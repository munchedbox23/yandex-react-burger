import styles from "./ProfilePage.module.css";
import { Outlet } from "react-router-dom";
import { ProfileTabs } from "../../components/Profile/ProfileTabs/ProfileTabs";
import { FC } from "react";

export const ProfilePage: FC = () => {
  return (
    <div className={`${styles.profileWrapper} pl-4`}>
      <ProfileTabs />
      <Outlet />
    </div>
  );
};
