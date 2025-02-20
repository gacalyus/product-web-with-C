import { Route, Routes } from "react-router-dom";
import Navi from "./components/navi/Navi";
import NotFoundPage from "./components/NotFoundPage";
import HomePage from "./components/HomePage";
import ProductAdd from "./components/productAdd/ProductAdd";

function RootComponent() {
  return (
    <div className="container">
      <Navi />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<HomePage />} />
        <Route path="/product-add" element={<ProductAdd />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default RootComponent;
