import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Motorcycles from "./Motorcycles";
import About from "./About";
import RentalBike from "./RentalBike";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/10-final-project-samudraam/" element={<Home />} />
        <Route path="/10-final-project-samudraam/motorcycles" element={<Motorcycles />} />
        <Route path="/10-final-project-samudraam/rental" element={<RentalBike />} />
        <Route path="/10-final-project-samudraam/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
