import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home";
import RecommendedItems from './components/recommendedItems';
import ProductDetails from './pages/productdetails';
import Order from "./pages/order";
import Cart from "./pages/cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<RecommendedItems />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/order" element={<Order />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
