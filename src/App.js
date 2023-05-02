import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/AddProduct";
import Login from "./components/Login";
// import Footer from "./components/Footer";
import ENavbar from "./components/Navbar";
import PrivateComponent from "./components/PrivateComponent";
import ProductList from "./components/ProductList";
import SignUp from "./components/SignUp";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ENavbar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductList />}></Route>
            <Route path="/add" element={<AddProduct />}></Route>
            <Route path="/update/:id" element={<UpdateProduct />}></Route>
            <Route path="/profile" element={<h1>Profile Component</h1>}></Route>
            <Route path="/logout" element={<h1>Logout Component</h1>}></Route>
          </Route>
          <Route
            path="/signUp"
            element={
              <>
                <SignUp />
              </>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
