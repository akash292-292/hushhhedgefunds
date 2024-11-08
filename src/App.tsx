import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Leadership from './components/Leadership';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';
import Login from './pages/Login'
import Contact from './pages/Contact';
import Signup from './pages/Signup';
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/philosophy" element={<Philosophy />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path='/Signup' element={<Signup/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;