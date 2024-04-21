import AppHeader from "../components/AppHeader/AppHeader";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Preloader } from "../components/Preloader/Preloader";

export const MainLayout = () => {
  const isRequestLoading = useSelector((store) => store.user.isRequestLoading);
  return (
    <>
      <AppHeader />
      {isRequestLoading ? <Preloader /> : <Outlet />}
    </>
  );
};
