import { Heart, Info } from 'lucide-react';

const vehicles = [
  {
    id: 1,
    name: "2023 BMW M4 Competition",
    price: "£82,995",
    image: "https://images.unsplash.com/photo-1617814076668-946f6ae64e80?auto=format&fit=crop&q=80",
    mileage: "2,500",
    transmission: "Automatic",
    fuelType: "Petrol"
  },
  {
    id: 2,
    name: "2022 Mercedes-AMG GT",
    price: "£125,000",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80",
    mileage: "1,200",
    transmission: "Automatic",
    fuelType: "Petrol"
  },
  {
    id: 3,
    name: "2023 Porsche 911 GT3",
    price: "£164,995",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80",
    mileage: "500",
    transmission: "PDK",
    fuelType: "Petrol"
  }
];

export default function FeaturedVehicles() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Vehicles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{vehicle.name}</h3>
                    <p className="text-2xl font-bold text-blue-600 mt-1">{vehicle.price}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <span className="font-medium">Mileage:</span>
                    <span className="ml-2">{vehicle.mileage}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">Transmission:</span>
                    <span className="ml-2">{vehicle.transmission}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">Fuel:</span>
                    <span className="ml-2">{vehicle.fuelType}</span>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                    <Info className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            View All Vehicles
          </button>
        </div>
      </div>
    </section>
  );
}