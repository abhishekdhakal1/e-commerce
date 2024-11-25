import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import SideBar from "./components/SideBar";
import Slider from "./components/Slider";
import Card from "./components/Card";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
//import Signup from "./components/signup/Signup";

function App() {
  return (
    <>
      <LandingPage />
      <Navigation />
      <SideBar />
      <Slider />
      <Card />
      <Categories />
      {/* <Signup /> */}
      <Footer />
    </>
  );
}
export default App;
