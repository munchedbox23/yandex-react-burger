import AppConstructor from "../AppConstructor/AppConstructor";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../../layouts/MainLayout";
import { ROUTE } from "../../utils/constants";
import { NotFound } from "../../pages";

function App() {
  return (
    <Routes>
      <Route path={ROUTE.main} element={<MainLayout />}>
        <Route index element={<AppConstructor />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
