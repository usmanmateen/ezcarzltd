import { useState } from 'react';

export function TestDriveForm({ carId }: { carId: number }) {
  const [booking, setBooking] = useState({
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement booking logic
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Add form fields */}
    </form>
  );
}
