import AppHeader from "../components/AppHeader/AppHeader";
import { Outlet } from "react-router-dom";
import { Preloader } from "../ui/Preloader/Preloader";
import { useAppSelector } from "../services/store/hooks";
import { FC } from "react";

export const MainLayout: FC = () => {
  const isRequestLoading = useAppSelector(
    (store) => store.user.isRequestLoading
  );
  const getIngredientsRequest = useAppSelector(
    (store) => store.ingredients.getIngredientsRequest
  );

  return (
    <>
      <AppHeader />
      {isRequestLoading || getIngredientsRequest ? <Preloader /> : <Outlet />}
    </>
  );
};
