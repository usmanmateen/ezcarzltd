import { Heart, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Car } from '../types';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{car.name}</h3>
            <p className="text-2xl font-bold text-blue-600 mt-1">{car.price}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
          <div className="flex items-center">
            <span className="font-medium">Mileage:</span>
            <span className="ml-2">{car.mileage}</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium">Transmission:</span>
            <span className="ml-2">{car.transmission}</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium">Fuel:</span>
            <span className="ml-2">{car.fuelType}</span>
          </div>
        </div>
        
        <div className="flex space-x-4">
          <Link 
            to={`/car/${car.id}`}
            className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors text-center"
          >
            View Details
          </Link>
          <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
            <Info className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}