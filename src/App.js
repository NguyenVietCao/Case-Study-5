import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./furama-component/Header";
import Footer from "./furama-component/Footer";
import ListService from "./furama-component/Service/ServiceList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Service/ListService" element={<ListService/>}/>
          <Route />
          <Route />
        </Routes>

        <ListService />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
