import AppHeader from "../components/AppHeader/AppHeader";
import { Outlet } from "react-router-dom";
import { Preloader } from "../components/Preloader/Preloader";
import { useAppSelector } from "../services/store/hooks";
import { FC } from "react";

export const MainLayout: FC = () => {
  const isRequestLoading = useAppSelector((store) => store.user.isRequestLoading);
  return (
    <>
      <AppHeader />
      {isRequestLoading ? <Preloader /> : <Outlet />}
    </>
  );
};
