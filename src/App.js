import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./furama-component/Header";
import Footer from "./furama-component/Footer";
import Main from "./furama-component/Main";
import ListService from "./furama-component/ServiceFurama/ServiceList";
import CreateService from "./furama-component/ServiceFurama/CreateService";
import CustomerList from "./furama-component/Customer/CustomerList";
import CreateCustomer from "./furama-component/Customer/CreateCustomer";
import ContractList from "./furama-component/contract/ContractList";
import EditService from "./furama-component/ServiceFurama/EditService";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/service" element={<ListService />} />
          <Route path="/service/new" element={<CreateService />} />
          <Route path="/service/edit/:id" element={<EditService/>}/>
          <Route path="/customer" element={<CustomerList />} />
          <Route path="/customer/new" element={<CreateCustomer />} />
          <Route path="/contract" element={<ContractList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
