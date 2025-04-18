import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Loading from './components/loading';
import Accueil from './pages/acceuil';
import Projets from './pages/projets';
import Environnement from "./pages/Environnement";
import Navbar from './components/navbar';

const App = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='Content'>
      <Navbar />
      <div id='pages' className='rounded-lg mt-10 static'>
          <div>
          {isLoading ? <Loading /> :
              <Routes>
                <Route path="/Home"element={<Accueil />}/>
                <Route path="/Projets" element={<Projets />}/>
                <Route path="Environnement" element={<Environnement />}/>
                <Route path="*" element={<Accueil />}/>
              </Routes>}
          </div>
      </div>
    </div>
  );
};


export default App;

