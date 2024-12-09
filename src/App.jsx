import { BrowserRouter, Route, Routes } from "react-router";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
