import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/registration/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import SignIn from "./components/registration/SignIn";
import Footer from "./components/Footer/Footer";
import Addcart from "./components/Addcart/Addcart";
import Orderdetails from "./components/Orderdetails/Orderdetails";
import WishlistPage from "./components/WishlistPage/WishlistPage";
import Categiors from "./components/Categiors/Categiors";
import Male from "./components/Categiors/Male";
import Female from "./components/Categiors/Female";
import Kids from "./components/Categiors/Kids";



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
          <Route path="/contact" element={<Contact />} />
          <Route path="/addcart" element={<Addcart />} />
          <Route path="/orderdetails" element={<Orderdetails />} />
          <Route path="/wishlistpage" element={<WishlistPage />} />
          <Route path="/categiors" element={<Categiors />} />
          <Route path="/categiors/male" element={<Male />} />
          <Route path="/categiors/female" element={<Female />} />
          <Route path="/categiors/kids" element={<Kids />} />


        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
