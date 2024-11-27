import { useState } from 'react';
import { getAllCars } from '../data/cars';
import { Car } from '../types';
import AdminCarCard from '../components/AdminCarCard';
import AddCarForm from '../components/AddCarForm';
import { Plus, LayoutGrid, List, Search } from 'lucide-react';

export default function Admin() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [cars, setCars] = useState<Car[]>(getAllCars());
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const handleMarkAsSold = (carId: number) => {
    setCars(cars.map(car => 
      car.id === carId ? { ...car, status: 'sold' } : car
    ));
  };

  const handleRemoveCar = (carId: number) => {
    setCars(cars.filter(car => car.id !== carId));
  };

  const handleAddCar = (newCar: Car) => {
    setCars([...cars, { ...newCar, id: cars.length + 1 }]);
    setShowAddForm(false);
  };

  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.price.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <button
              onClick={() => setShowAddForm(true)}
              className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-5 w-5" />
              <span>Add New Car</span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search cars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${
                  viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <LayoutGrid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${
                  viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-2xl m-4">
              <AddCarForm onSubmit={handleAddCar} onCancel={() => setShowAddForm(false)} />
            </div>
          </div>
        )}

        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          : "space-y-4"
        }>
          {filteredCars.map((car) => (
            <AdminCarCard
              key={car.id}
              car={car}
              viewMode={viewMode}
              onMarkAsSold={() => handleMarkAsSold(car.id)}
              onRemove={() => handleRemoveCar(car.id)}
            />
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No cars found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}