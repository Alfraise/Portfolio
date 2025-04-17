import { Link } from "react-router-dom";
import Fraise from "../assets/Fraise.png";


const Navbar = () => {
  return (

    <nav className=" flex flex-col items-center mt-6" id="Navbar">
      <ul className="bg-violet-500 flex justify-evenly w-65 h-16 space-x-8 items-center bg-gray-700 rounded-lg mx-10">

        <li className="hover: m-0">
          <Link to="/"><img className="rounded-full w-13" src={Fraise} alt="Une Fraise" title="Une Fraise" /></Link>
        </li>

        <li className="hover:text-violet-300 m-0">
          <Link to="/Projets">Projets</Link>
        </li>

        <li className="hover:text-violet-300 m-0">
        <Link to="/Contact">Contact</Link>
        </li>

      </ul>
    </nav>
    
  );
}
export default Navbar;