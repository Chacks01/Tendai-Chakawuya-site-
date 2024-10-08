import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Portfoliopage from './Pages/Portfoliopage'
import Homepage from "./Pages/Homepage";
import About from "./Components/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css'

const App = () => {
  return (
    <div className="bg-[#000000]">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/portfolio" element={<Portfoliopage />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};




export default App;
