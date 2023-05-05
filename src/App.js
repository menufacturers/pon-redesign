import './assets/styles/App.css';
import { Route, Routes } from "react-router-dom";
import NavbarMenu from "./components/NavbarMenu";
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
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;