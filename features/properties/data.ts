import { Property } from './types';

// MODEL: starting data (like Lab 2's MOVIES array).
// TODO (together): add about 8 properties, mixed 'rent' and 'buy',
// using advertiserId values that exist in features/profiles/data.ts.
export const PROPERTIES: Property[] = [
  {
    id: 'p1',
    type: 'rent',
    title: '2-bedroom apartment',
    emoji: '🏢',
    location: 'New Cairo',
    compound: 'Mivida',
    address: 'Building 12, Street 5, Floor 3',
    mapsLink: 'https://maps.app.goo.gl/example',
    price: 18000,
    rooms: 2,
    area: 120,
    description: 'Bright apartment with a garden view, fully finished.',
    advertiserId: 'a1',
  },
];
