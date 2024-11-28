import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import SideBar from "./components/SideBar";
import Card from "./components/Card";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import PromotionalBanner from "./components/PromotionalBanner";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <LandingPage />
        <Navigation />
      </header>

      <div className="flex flex-grow">
        <aside className="w-64 bg-gray-100">
          <SideBar />
        </aside>

        <main className="flex-grow p-6">
          <div className="mb-6">
            <PromotionalBanner />
          </div>

          <div className="mb-6">
            <Card />
          </div>

          <div>
            <Categories />
          </div>
        </main>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
