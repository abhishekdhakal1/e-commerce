import { Outlet } from "react-router";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default Layout;
