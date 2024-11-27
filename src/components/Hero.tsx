import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80"
          alt="Luxury car showcase"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Find Your Perfect Drive
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Browse through our extensive collection of premium vehicles
        </p>
        
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <select className="flex-1 p-2 border rounded">
              <option>All Makes</option>
              <option>BMW</option>
              <option>Mercedes</option>
              <option>Audi</option>
              <option>Tesla</option>
            </select>
            <select className="flex-1 p-2 border rounded">
              <option>All Models</option>
            </select>
            <select className="flex-1 p-2 border rounded">
              <option>Price Range</option>
              <option>Up to £10,000</option>
              <option>£10,000 - £20,000</option>
              <option>£20,000 - £30,000</option>
              <option>£30,000+</option>
            </select>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 flex items-center justify-center">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}