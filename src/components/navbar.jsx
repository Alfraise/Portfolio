import { Link } from "react-router-dom";


const Navbar = () => {
  return (

    <nav className="flex flex-col items-center mt-6" id="Navbar">
      <ul className="flex justify-evenly w-1/5 h-16 space-x-8 items-center bg-gray-700 rounded-lg mx-10">

        <li className="hover:text-gray-400 m-0">
          <Link to="/"><img className="rounded-full w-13" src="./public/Fraise.png" alt="Une Fraise" title="Une Fraise" /></Link>
        </li>

        <li className="hover:text-gray-400 m-0">
          <Link to="/Projets">Projets</Link>
        </li>

        <li className="hover:text-gray-400 m-0">
        <Link to="/Contact">Contact</Link>
        </li>

      </ul>
    </nav>
    
  );
}
export default Navbar;