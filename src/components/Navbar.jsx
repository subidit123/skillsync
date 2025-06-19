import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/resume-analyzer', label: 'Resume Analyzer' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">SkillSync</h1>
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`hover:text-indigo-500 transition-colors duration-200 ${
                location.pathname === item.path ? 'text-indigo-600 font-semibold' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`hover:text-indigo-500 transition-colors duration-200 ${
                location.pathname === item.path ? 'text-indigo-600 font-semibold' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
