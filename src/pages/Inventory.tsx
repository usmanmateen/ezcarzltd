import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { getAllCars } from '../data/cars';
import CarCard from '../components/CarCard';

export default function Inventory() {
  const [showFilters, setShowFilters] = useState(false);
  const cars = getAllCars();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Our Inventory</h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
        >
          <SlidersHorizontal className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {showFilters && (
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Price Range</h3>
              <select className="w-full p-2 border rounded">
                <option>Any Price</option>
                <option>Up to £10,000</option>
                <option>£10,000 - £20,000</option>
                <option>£20,000 - £30,000</option>
                <option>£30,000+</option>
              </select>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Make</h3>
              <select className="w-full p-2 border rounded">
                <option>All Makes</option>
                <option>BMW</option>
                <option>Mercedes</option>
                <option>Audi</option>
                <option>Tesla</option>
              </select>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Year</h3>
              <select className="w-full p-2 border rounded">
                <option>Any Year</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
              </select>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Mileage</h3>
              <select className="w-full p-2 border rounded">
                <option>Any Mileage</option>
                <option>Up to 10,000</option>
                <option>10,000 - 30,000</option>
                <option>30,000 - 60,000</option>
                <option>60,000+</option>
              </select>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Apply Filters
            </button>
          </div>
        )}

        <div className={`${showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}`}>
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by make, model, or keyword..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}