import AppConstructor from "../AppConstructor/AppConstructor";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../../layouts/MainLayout";
import { ROUTE } from "../../utils/constants";
import {
  NotFound,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
} from "../../pages";
import { useLocation, useNavigate } from "react-router-dom";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state?.background;

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
          <Route path={ROUTE.mainLayout.login} element={<LoginPage />} />
          <Route path={ROUTE.mainLayout.register} element={<RegisterPage />} />
          <Route
            path={ROUTE.mainLayout.forgotPass}
            element={<ForgotPasswordPage />}
          />
          <Route
            path={ROUTE.mainLayout.resetPass}
            element={<ResetPasswordPage />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      {background && (
        <Routes>
          <Route
            path={ROUTE.mainLayout.currIngredient}
            element={
              <Modal title="Детали ингредиента" onClose={handleCloseModal}>
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
