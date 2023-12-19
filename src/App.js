import "./App.css";
import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/Navigation";
import Home from "./customer/pages/Home";

function App() {
  return (
    <div>
      <Navigation />
      <div>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
