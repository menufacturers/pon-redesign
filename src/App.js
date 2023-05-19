import './assets/styles/App.css';
import { Route, Routes } from "react-router-dom";
import NavbarMenu from "./components/NavbarMenu";
import Footer from './components/Footer';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import Passport from './pages/Passport';
import Press from './pages/Press';
import About from './pages/About';
import Portal from './pages/Portal';
import Alem from './pages/subpages/Alem';
import BananasGrill from './pages/subpages/BananasGrill';

function App() {
  return (
    <div>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="restaurants" element={<Restaurants />} />
        <Route path="alem" element={<Alem />} />
        <Route path="bananasgrill" element={<BananasGrill />} />
        <Route path="digital-passport" element={<Portal />} />
        <Route path="passport" element={<Passport />} />
        <Route path="press" element={<Press />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;