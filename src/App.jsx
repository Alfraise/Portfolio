import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from "framer-motion"
import Loading from './components/loading'
import Accueil from './pages/acceuil'
import Projets from './pages/projets'
import Contact from './pages/contact'
import Navbar from './components/navbar'

const App = () => {
  const location = useLocation();


  const pageVariants = {
    initial: { opacity: 0, x: "-100vw" },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100vw" },
  };
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };
  

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
      <div id='pages' className='bg-gray-900 rounded-lg mt-10 static'>
        {isLoading ? <Loading /> :
          <div>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>

                <Route
                  path="/Home"
                  element={
                    <motion.div
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <Accueil />
                    </motion.div>
                  }
                />

                <Route
                  path="/Projets"
                  element={
                    <motion.div
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <Projets />
                    </motion.div>
                  }
                />

                <Route
                  path="/Contact"
                  element={
                    <motion.div
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <Contact />
                    </motion.div>
                  }
                />

                <Route
                  path="*"
                  element={
                    <motion.div
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <Accueil />
                    </motion.div>
                  }
                />

              </Routes>
            </AnimatePresence>
          </div>}
      </div>
    </div>
  );
};


export default App;

