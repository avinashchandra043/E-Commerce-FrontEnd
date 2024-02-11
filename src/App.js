import "./App.css";
import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/Navigation";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Home from "./customer/pages/Home";

function App() {
  return (
    <div>
      <Navigation />
      <div>
        {/* <Home /> */}
        {/* <Product /> */}
        <ProductDetails />
      </div>
      <Footer />
    </div>
  );
}

export default App;
