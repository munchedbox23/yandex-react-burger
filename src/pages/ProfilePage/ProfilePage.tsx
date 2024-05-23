import styles from "./ProfilePage.module.css";
import { Outlet } from "react-router-dom";
import { ProfileTabs } from "../../components/Profile/ProfileTabs/ProfileTabs";
import { FC } from "react";
import { motion } from "framer-motion";
import { fadeInVariant } from "../../utils/constants";

export const ProfilePage: FC = () => {
  return (
    <motion.div
      className={`${styles.profileWrapper} pl-4`}
      initial="hidden"
      animate="visible"
      variants={fadeInVariant}
    >
      <ProfileTabs />
      <Outlet />
    </motion.div>
  );
};
