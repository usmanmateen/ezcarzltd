import { Car, Heart, Menu, Search, User } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-blue-600" : "text-gray-700 hover:text-blue-600";
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">ezcarz.co.uk</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={isActive("/")}>Home</Link>
            <Link to="/inventory" className={isActive("/inventory")}>Inventory</Link>
            <Link to="/services" className={isActive("/services")}>Services</Link>
            <Link to="/about" className={isActive("/about")}>About</Link>
            <Link to="/contact" className={isActive("/contact")}>Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Heart className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Home</Link>
            <Link to="/inventory" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Inventory</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Services</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}