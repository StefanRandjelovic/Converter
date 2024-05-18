import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeightConvert from "./pages/WeightConvert";


function App() {
  
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <WeightConvert  />
          }
        />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
