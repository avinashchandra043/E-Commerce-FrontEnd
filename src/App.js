import "./App.css";
import CustomerRouters from "./Routers/CustomerRouters";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Auth from "./Pages/Customer/Auth/UserAuth";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<CustomerRouters />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
