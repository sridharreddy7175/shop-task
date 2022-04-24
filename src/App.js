import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { connect } from "react-redux";


function App(props) {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Products />}></Route>
          <Route path="/cart" element={<Navbar />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default connect(
  (state) => ({
    items: state.shop,
  }),

  {}
)(App);
