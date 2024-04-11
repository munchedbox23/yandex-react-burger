import AppHeader from "../components/AppHeader/AppHeader";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
};
