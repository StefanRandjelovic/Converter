import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeightConvert from "./pages/WeightConvert";
import { useState } from "react";

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
