import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SneakerStore from './pages/SneakerStore';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#05050A] text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sneakers" element={<SneakerStore />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
