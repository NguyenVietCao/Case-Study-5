import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./furama-component/Header";
import Footer from "./furama-component/Footer";
import Main from "./furama-component/Main";
import ListService from "./furama-component/Service/ServiceList";
import CreateService from "./furama-component/Service/CreateService";
import CustomerList from "./furama-component/Customer/CustomerList";
import CreateCustomer from "./furama-component/Customer/CreateCustomer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/service" element={<ListService/>}/>
          <Route path="/service/new" element={<CreateService/>}/>
          <Route path="/customer" element={<CustomerList/>}/>
          <Route path="/customer/new" element={<CreateCustomer/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
