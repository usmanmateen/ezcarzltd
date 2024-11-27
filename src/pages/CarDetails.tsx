import { useParams } from 'react-router-dom';
import { Calendar, Fuel, Gauge, Settings, Shield, Tag } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getCar } from '../data/cars';
import type { Car } from '../types';

export default function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    if (id) {
      setCar(getCar(parseInt(id)));
    }
  }, [id]);

  if (!car) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <div className="grid grid-cols-3 gap-4">
            {car.gallery?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${car.name} view ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-75"
              />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{car.name}</h1>
            <p className="text-3xl font-bold text-blue-600 mt-2">{car.price}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>{car.year}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Gauge className="h-5 w-5" />
              <span>{car.mileage} miles</span>
            </div>
            <div className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <span>{car.transmission}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Fuel className="h-5 w-5" />
              <span>{car.fuelType}</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold mb-4">Key Features</h2>
            <ul className="grid grid-cols-2 gap-y-2 text-gray-600">
              {car.features?.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold mb-4">Vehicle Description</h2>
            <p className="text-gray-600">{car.description}</p>
          </div>

          <div className="flex space-x-4">
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Book Test Drive
            </button>
            <button className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50">
              Enquire Now
            </button>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Tag className="h-4 w-4" />
              <span>Stock ID: {car.id}</span>
            </div>
            <button className="text-blue-600 hover:underline">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}