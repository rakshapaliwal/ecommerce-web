import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/registration/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import SignIn from "./components/registration/SignIn";
import Footer from "./components/Footer/Footer";
import Cartlist from "./components/Cartlist/Cartlist";
import Orderdetails from "./components/Orderdetails/Orderdetails";
import WishlistPage from "./components/WishlistPage/WishlistPage";
import Categiors from "./components/Categiors/Categiors";
import Male from "./components/Categiors/Male";
import Female from "./components/Categiors/Female";
import Kids from "./components/Categiors/Kids";
import Topbar from "./components/Topbar/Topbar";
import Profile from "./components/Profile/Profile";
import Product from "./components/Product/Product";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import SearchBar from "./components/SearchBar/SearchBar";
import Checkout from "./components/Checkout/Checkout";
import ProductDetails from "./components/ProductDetails/ProductDetails";




function App() {
  const [count, setCount] = useState(0);







  return (
    <>
      {/* Search bar */}

      <Router>
        <Topbar />
        <Navbar />
        {/* <SearchBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cartlist" element={<Cartlist />} />
          <Route path="/orderdetails" element={<Orderdetails />} />
          <Route path="/wishlistpage" element={<WishlistPage />} />
          <Route path="/categiors" element={<Categiors />} />
          <Route path="/categiors/male" element={<Male />} />
          <Route path="/categiors/female" element={<Female />} />
          <Route path="/categiors/kids" element={<Kids />} />
          <Route path="/product" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/productdetails" element={<ProductDetails />} />




        </Routes>
        <ScrollToTopButton />
        <Footer />
      </Router>
    </>
  );
}

export default App;
