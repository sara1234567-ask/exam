import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Catalog", path: "/catalog" },
    { name: "Cart", path: "/cart" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="bg-yellow-300 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
       
        <div className="text-2xl font-bold text-yellow-800 flex items-center space-x-2">
          <span>📚</span>
          <span>BookVerse</span>
        </div>

        
        <nav className="space-x-6 hidden md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-800 font-semibold border-b-2 border-yellow-800 pb-1"
                  : "text-gray-700 hover:text-yellow-800 transition"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        
      </div>
    </header>
  );
};

export default Header;


