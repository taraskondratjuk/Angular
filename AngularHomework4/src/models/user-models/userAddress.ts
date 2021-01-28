export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
  geo: { lat: number, lng: number };
}
