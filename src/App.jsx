import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import Loading from './components/loading.jsx'
import Accueil from './pages/acceuil.jsx'
import Projets from './pages/projets.jsx'
import Contact from './pages/contact.jsx'
import Navbar from './components/navbar.jsx'

function App() {

  return (
    <div>
      <header>
        <Navbar />
      </header>


      <div id='pages' className=''>
            <Accueil />
            <Projets />
      </div>

      <footer>
        <p>Alfred Toussaint</p>
      </footer>

    </div>
  );
}


export default App;

