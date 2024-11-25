import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import CraneHire from './pages/CranHire'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Projects'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cranehire" element={<CraneHire/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/projects" element={<Project/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
