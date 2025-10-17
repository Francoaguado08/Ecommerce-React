import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Ofertas from './components/Ofertas';
import Infaltables from './components/Infaltables';
import Login from './components/Login'; 
import Footer from './components/Footer';

function App() {
  

  return (
  
    <Router>

      <Header />

      
    <main className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/infaltables" element={<Infaltables />} />
          <Route path="/administracion" element={<Login />} />
        </Routes>
      </main>

     
      <Footer />
    </Router>




    
  )
}

export default App;
