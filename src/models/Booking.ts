export interface Booking {
  id: string;
  bookingCode: string;
  name: string;
  description: string;
  regionNote: string;
  userRef: string;
  packageRef: string;
  numberOfDays: number;
  cost: number;
  passengerNumber: number;
  paid: boolean;
  startAt: string;
  createdAt: string;
  itineraries: string;
  reviews: string;
  url: "";
}
