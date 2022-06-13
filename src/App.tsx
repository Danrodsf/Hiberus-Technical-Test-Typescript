import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error404 from "./pages/Error404";

import "./App.css";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/users" element={<Users />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
