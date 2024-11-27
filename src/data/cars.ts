import type { Car } from '../types';

const cars: Car[] = [
  {
    id: 1,
    name: "2023 BMW M4 Competition",
    price: "£82,995",
    image: "https://images.unsplash.com/photo-1617814076668-946f6ae64e80?auto=format&fit=crop&q=80",
    mileage: "2,500",
    transmission: "Automatic",
    fuelType: "Petrol",
    year: 2023,
    description: "The BMW M4 Competition combines racing DNA with luxury comfort. This stunning example comes with a full BMW service history and features the latest technology including BMW Live Cockpit Professional and Driving Assistant Professional.",
    features: [
      "M Sport Differential",
      "Carbon Fiber Roof",
      "Harman Kardon Sound System",
      "Head-Up Display",
      "Leather M Sport Seats",
      "19\"/20\" M forged wheels"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1619362280286-f1f8fd5032ed?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1619362280285-c5012d48f15f?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 2,
    name: "2022 Mercedes-AMG GT",
    price: "£125,000",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80",
    mileage: "1,200",
    transmission: "Automatic",
    fuelType: "Petrol",
    year: 2022,
    description: "This Mercedes-AMG GT represents the pinnacle of German engineering and luxury. With its hand-built AMG engine and premium features, it delivers an unmatched driving experience.",
    features: [
      "AMG RIDE CONTROL",
      "Burmester Surround Sound",
      "AMG Performance Seats",
      "360-Degree Camera",
      "Night Package",
      "Carbon Fiber Trim"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1618843479280-4cd2e4650101?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618843479283-094e4777a204?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618843479296-a52a4f00be51?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 3,
    name: "2023 Porsche 911 GT3",
    price: "£164,995",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80",
    mileage: "500",
    transmission: "PDK",
    fuelType: "Petrol",
    year: 2023,
    description: "The Porsche 911 GT3 represents the perfect balance between track performance and road usability. This example comes with extensive optional extras and the coveted Porsche Ceramic Composite Brakes.",
    features: [
      "Porsche Ceramic Composite Brakes",
      "Club Sport Package",
      "Front Axle Lift System",
      "Sport Chrono Package",
      "LED Matrix Headlights",
      "Carbon Fiber Full Bucket Seats"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1614162692293-294f761d0fa9?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1614162692289-fe6c7c9c1217?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1614162692281-4d2c1c4f4744?auto=format&fit=crop&q=80"
    ]
  }
];

export function getAllCars(): Car[] {
  return cars;
}

export function getCar(id: number): Car | null {
  return cars.find(car => car.id === id) || null;
}