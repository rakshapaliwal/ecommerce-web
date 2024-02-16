import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/registration/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import SignIn from "./components/registration/SignIn";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
