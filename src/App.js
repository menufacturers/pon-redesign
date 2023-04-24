import './assets/styles/App.css';
import { Route, Routes } from "react-router-dom";
import NavbarMenu from "./components/NavbarMenu";

function App() {
  return (
    <div>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/" element={<restaurants />} />
        <Route path="/" element={<passport />} />
        <Route path="/" element={<press />} />
        <Route path="/" element={<about />} />
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