import { Advertiser, Review, User } from './types';

export const USERS: User[] = [
  { id: 'u1', name: 'Sara Mahmoud', email: 'sara@gmail.com', phone: '01011112222', memberSince: '2025' },
  { id: 'u2', name: 'Omar Khaled', email: 'omar@gmail.com', phone: '01133334444', memberSince: '2024' },
  { id: 'u3', name: 'Nour Ibrahim', email: 'nour@gmail.com', phone: '01555556666', memberSince: '2026' },
];

export const ADVERTISERS: Advertiser[] = [
  { id: 'a1', name: 'Ahmed Hassan', company: 'Nile Homes', email: 'ahmed@nilehomes.com', phone: '01012345678', memberSince: '2024' },
  { id: 'a2', name: 'Mona Adel', company: 'Cairo Living', email: 'mona@cairoliving.com', phone: '01198765432', memberSince: '2025' },
  { id: 'a3', name: 'Karim Samir', company: 'West Estates', email: 'karim@westestates.com', phone: '01234567890', memberSince: '2023' },
];

export const REVIEWS: Review[] = [
  { id: 'r1', targetId: 'a1', reviewerName: 'Sara Mahmoud', stars: 5, comment: 'Very helpful and answered quickly.' },
  { id: 'r2', targetId: 'a1', reviewerName: 'Omar Khaled', stars: 4, comment: 'The apartment was exactly like the description.' },
  { id: 'r3', targetId: 'a2', reviewerName: 'Nour Ibrahim', stars: 3, comment: 'Good place but slow replies.' },
  { id: 'r4', targetId: 'a3', reviewerName: 'Sara Mahmoud', stars: 5, comment: 'Professional and honest.' },
  { id: 'r5', targetId: 'u1', reviewerName: 'Ahmed Hassan', stars: 5, comment: 'Paid on time and kept the flat clean.' },
  { id: 'r6', targetId: 'u1', reviewerName: 'Mona Adel', stars: 4, comment: 'Easy to deal with.' },
  { id: 'r7', targetId: 'u2', reviewerName: 'Ahmed Hassan', stars: 4, comment: 'Serious buyer, good communication.' },
];