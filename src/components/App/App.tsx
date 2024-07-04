import AppConstructor from "../AppConstructor/AppConstructor";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../../layouts/MainLayout";
import { ROUTE } from "../../utils/constants";
import { OnlyAuth, OnlyUnAuth } from "../ProctectedRoute/ProctectedRoute";
import {
  NotFound,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  FeedPage,
} from "../../pages";
import { useLocation, useNavigate } from "react-router-dom";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";
import { ProfileInfo } from "../Profile/ProfileInfo/ProfileInfo";
import { ProfileOrders } from "../Profile/ProfileOrders/ProfileOrders";
import { useAppDispatch } from "../../services/store/hooks";
import { useEffect } from "react";
import { checkUserAuth } from "../../services/features/user/auth";
import { OrderInfo } from "../OrderInfo/OrderInfo";

function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const background = location.state?.background;

  useEffect(() => {
    dispatch(checkUserAuth());
  }, [dispatch]);

  const handleCloseModal = () => {
    navigate(-1);
  };

  return (
    <>
      <Routes location={background || location}>
        <Route path={ROUTE.main} element={<MainLayout />}>
          <Route index element={<AppConstructor />} />
          <Route
            path={ROUTE.mainLayout.currIngredient}
            element={<IngredientDetails />}
          />
          <Route path={ROUTE.mainLayout.feed} element={<FeedPage />} />
          <Route path={ROUTE.mainLayout.feedOrder} element={<OrderInfo />} />
          <Route
            path={ROUTE.userProfile.userOrders}
            element={<OnlyAuth component={<OrderInfo />} />}
          />
          <Route
            path={ROUTE.mainLayout.login}
            element={<OnlyUnAuth component={<LoginPage />} />}
          />
          <Route
            path={ROUTE.mainLayout.register}
            element={<OnlyUnAuth component={<RegisterPage />} />}
          />
          <Route
            path={ROUTE.mainLayout.forgotPass}
            element={<OnlyUnAuth component={<ForgotPasswordPage />} />}
          />
          <Route
            path={ROUTE.mainLayout.resetPass}
            element={<OnlyUnAuth component={<ResetPasswordPage />} />}
          />
          <Route
            path={ROUTE.userProfile.profile}
            element={<OnlyAuth component={<ProfilePage />} />}
          >
            <Route index element={<OnlyAuth component={<ProfileInfo />} />} />
            <Route
              path={ROUTE.userProfile.orders}
              element={<OnlyAuth component={<ProfileOrders />} />}
            />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      {background && (
        <Routes>
          <Route
            path={`/${ROUTE.mainLayout.currIngredient}`}
            element={
              <Modal title="Детали ингредиента" onClose={handleCloseModal}>
                <IngredientDetails />
              </Modal>
            }
          />
          <Route
            path={`/${ROUTE.mainLayout.feedOrder}`}
            element={
              <Modal onClose={handleCloseModal}>
                <OrderInfo />
              </Modal>
            }
          />
          <Route
            path={`/${ROUTE.userProfile.userOrders}`}
            element={
              <Modal onClose={handleCloseModal}>
                <OnlyAuth component={<OrderInfo />} />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
