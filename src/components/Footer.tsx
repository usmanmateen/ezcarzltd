import { Car, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Car className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">ezcarz.co.uk</span>
            </div>
            <p className="text-sm">
              Your trusted destination for premium vehicles in the UK.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-blue-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">Home</a></li>
              <li><a href="#inventory" className="hover:text-blue-500">Inventory</a></li>
              <li><a href="#services" className="hover:text-blue-500">Services</a></li>
              <li><a href="#about" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">Car Finance</a></li>
              <li><a href="#" className="hover:text-blue-500">Vehicle Protection</a></li>
              <li><a href="#" className="hover:text-blue-500">Car Service</a></li>
              <li><a href="#" className="hover:text-blue-500">Part Exchange</a></li>
              <li><a href="#" className="hover:text-blue-500">Car Insurance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>123 Car Street</li>
              <li>London, UK</li>
              <li>Phone: 020 1234 5678</li>
              <li>Email: info@ezcarz.co.uk</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} ezcarz.co.uk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}