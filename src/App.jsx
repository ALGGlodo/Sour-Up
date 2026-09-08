import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePages';
import SoursPage from './pages/SourProducts';
import './App.css';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sours" element={<SoursPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;