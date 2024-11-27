import { Car } from '../types';
import { Tag, Trash2, Calendar, Gauge, Settings } from 'lucide-react';

interface AdminCarCardProps {
  car: Car;
  viewMode: 'grid' | 'list';
  onMarkAsSold: () => void;
  onRemove: () => void;
}

export default function AdminCarCard({ car, viewMode, onMarkAsSold, onRemove }: AdminCarCardProps) {
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-48 h-48 md:h-auto">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover"
            />
            {car.status === 'sold' && (
              <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                SOLD
              </div>
            )}
          </div>
          
          <div className="flex-1 p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{car.name}</h3>
                <p className="text-2xl font-bold text-blue-600 mt-1">{car.price}</p>
              </div>
              
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <button
                  onClick={onMarkAsSold}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    car.status === 'sold'
                      ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                  disabled={car.status === 'sold'}
                >
                  <Tag className="h-4 w-4" />
                  <span>{car.status === 'sold' ? 'Sold' : 'Mark as Sold'}</span>
                </button>
                
                <button
                  onClick={onRemove}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                  <span>Remove</span>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{car.year}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Gauge className="h-4 w-4" />
                <span>{car.mileage}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Settings className="h-4 w-4" />
                <span>{car.transmission}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 object-cover"
        />
        {car.status === 'sold' && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            SOLD
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">{car.name}</h3>
        <p className="text-2xl font-bold text-blue-600 mt-1">{car.price}</p>
        
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 my-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Gauge className="h-4 w-4" />
            <span>{car.mileage}</span>
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <button
            onClick={onMarkAsSold}
            className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-lg ${
              car.status === 'sold'
                ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
            disabled={car.status === 'sold'}
          >
            <Tag className="h-4 w-4" />
            <span>{car.status === 'sold' ? 'Sold' : 'Mark as Sold'}</span>
          </button>
          
          <button
            onClick={onRemove}
            className="flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
          >
            <Trash2 className="h-4 w-4" />
            <span>Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
}