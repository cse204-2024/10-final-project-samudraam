import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Motorcycles from "./Motorcycles";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Motorcycles" element={<Motorcycles />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
