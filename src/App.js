import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./Pages/LandingPage";
import Map from "./Google-Maps/Map_Api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Map />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
