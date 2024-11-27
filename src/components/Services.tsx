import { Clock, Shield, Wrench, Truck } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: "Vehicle Protection",
    description: "Comprehensive warranty and insurance options to protect your investment."
  },
  {
    icon: Wrench,
    title: "Service & Maintenance",
    description: "Professional servicing and maintenance by certified technicians."
  },
  {
    icon: Truck,
    title: "Home Delivery",
    description: "Convenient delivery service to your doorstep anywhere in the UK."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your needs."
  }
];

export default function Services() {
  return (
    <section className="py-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive automotive solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}