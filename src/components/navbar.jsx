const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-center space-x-8">
        <li className="hover:text-gray-400">Acceuil</li>
        <li className="hover:text-gray-400">Projets</li>
        <li className="hover:text-gray-400">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;