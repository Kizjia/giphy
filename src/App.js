import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Random from './components/Random/Random';
import Trend from './components/Trend/Trend';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/giphy">
        <Navbar />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/random" element={<Random />} />
          <Route path="/trend" element={<Trend />} />
          <Route path="*" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
