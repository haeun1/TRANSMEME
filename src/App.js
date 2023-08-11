// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Page0 from "./components/Page0";
import Page1 from "./components/Page1"; // Page1.js로부터 컴포넌트를 import
import Page1_start from "./components/Page1_start";
import Page1_result from "./components/Page1_result";
import Page2 from "./components/Page2"; // Page2.js로부터 컴포넌트를 import
import Page3 from "./components/Page3"; // Page3.js로부터 컴포넌트를 import
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page0" element={<Page0 />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page1_start" element={<Page1_start />} />
        <Route path="/page1_result" element={<Page1_result />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </Router>
  );
};

export default App;
