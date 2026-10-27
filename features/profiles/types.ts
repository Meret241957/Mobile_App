// MODEL
export type User = { id: string; name: string; email: string; phone: string; memberSince: string };
export type Advertiser = User & { company: string };
export type Review = { id: string; targetId: string; reviewerName: string; stars: number; comment: string };
