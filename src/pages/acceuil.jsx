import { Link } from "react-router-dom";

const Acceuil = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="text-pink-300">Toussaint Alfred</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Développeur Web Fullstack
        </h2>

        <Link to="/Projets" className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
          Voir mes projets
        </Link>

      </div>
    </section>
  );
};

export default Acceuil;