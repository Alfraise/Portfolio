import { motion } from 'framer-motion'

const Accueil = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="p-4"
    >
      <div className="flex flex-col justify-center items-center mt-70 mb-110 mx-145">
        <h1>Toussaint Alfred</h1>
        <p>Web Developer</p>
      </div>
    </motion.div>
  );
};
export default Accueil;