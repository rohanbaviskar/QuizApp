import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home"; 
import QuizInstructions from "./Quiz/QuizInstructions";

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" exact  element={<Home />}/>
        <Route path="/play/instructions" element={<QuizInstructions/>}/>
      </Routes>
    </Router>
  );
}

export default App;
