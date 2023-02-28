// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Contact from './pages/Contact';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import fontawesome5IconsList from 'fontawesome-5-icons-list';
// import fontawesome from "font-awesome"
import DownloadButton from './components/DownloadButton';
// import "../public/projects"
// import "../public/photos/fridgeDaddy.PNG"
function App() {
  return (
    <div className="App">
<Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  <Footer />
</Router>
    </div>
  );
}

export default App;
