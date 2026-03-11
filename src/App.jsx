import { Routes, Route } from 'react-router-dom';
import './index.css';
import './styles/animations.css';
import Navbar from './components/Navbar';
import MouseSparkle from './components/MouseSparkle';
import Home from './pages/Home';
import Events from './pages/Events';
import Developers from './pages/Developers';
import About from './pages/About';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  return (
    <>
      <MouseSparkle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/devs" element={<Developers />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
