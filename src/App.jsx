// DEV DEPENDENCY
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// PAGES
import WeightConvert from "./pages/WeightConvert";
import Landing from "@pages/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/weightConvert" element={<WeightConvert />} />
      </Routes>
    </Router>
  );
}

export default App;
