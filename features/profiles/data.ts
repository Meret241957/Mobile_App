import { Advertiser, Review, User } from './types';

// MODEL: starting data.
// TODO (together): 3 users, 3 advertisers (ids a1-a3), 6-7 reviews.
// A review's targetId is the id of the person being rated.
export const USERS: User[] = [
  { id: 'u1', name: 'Sara Mahmoud', email: 'sara@gmail.com', phone: '01011112222', memberSince: '2025' },
];

export const ADVERTISERS: Advertiser[] = [
  { id: 'a1', name: 'Ahmed Hassan', company: 'Nile Homes', email: 'ahmed@nilehomes.com', phone: '01012345678', memberSince: '2024' },
];

export const REVIEWS: Review[] = [
  { id: 'r1', targetId: 'a1', reviewerName: 'Sara Mahmoud', stars: 5, comment: 'Very helpful and answered quickly.' },
];
