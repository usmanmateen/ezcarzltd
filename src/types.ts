export interface Car {
  id: number;
  name: string;
  price: string;
  image: string;
  mileage: string;
  transmission: string;
  fuelType: string;
  year: number;
  description: string;
  features?: string[];
  gallery?: string[];
  status?: 'available' | 'sold';
}