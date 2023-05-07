import './assets/styles/App.css';
import { Route, Routes } from "react-router-dom";
import NavbarMenu from "./components/NavbarMenu";
import Footer from './components/Footer';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import Passport from './pages/Passport';
import Press from './pages/Press';
import About from './pages/About';

function App() {
  return (
    <div>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="restaurants" element={<Restaurants />} />
        <Route path="passport" element={<Passport />} />
        <Route path="press" element={<Press />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;