import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import SideBar from "./components/SideBar";
import Slider from "./components/Slider";
import Card from "./components/Card";
import imagee from "./assets/img.png";

function App() {
  return (
    <>
      <LandingPage />
      <Navigation />
      <SideBar />
      <Slider />
      <Card discount={"20"} image={imagee}/>
    </>
  );
}
export default App;
