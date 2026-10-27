// MODEL: the shape of a property (like Lab 2's Movie type)
export type ListingType = 'rent' | 'buy';

export type Property = {
  id: string;
  type: ListingType;
  title: string;
  emoji: string;
  location: string;
  compound: string; // '' if not in a compound
  address: string;
  mapsLink: string;
  price: number;
  rooms: number;
  area: number;
  description: string;
  advertiserId: string;
};
