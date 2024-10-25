import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importando Router
import Home from './pages/Home';  // Importando o componente Home
import CourseDetail from './pages/CourseDetail'; // Importando o componente CourseDetail

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Rota para a Home */}
          <Route path="/course/:id" element={<CourseDetail />} /> {/* Rota atualizada para o CourseDetail */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
