import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./containers/HomePage";


function App(props) {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="/cart" element={<Navbar />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
