// DEV DEPENDENCY
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// PAGES
import WeightConvert from "./pages/WeightConvert";
import Landing from "@pages/Landing";
import WaterNeeds from "@pages/HowMuchWaterDoINeed";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/weightConvert" element={<WeightConvert />} />
        <Route path="/waterNeeds" element={<WaterNeeds />} />
      </Routes>
    </Router>
  );
}

export default App;
