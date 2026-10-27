import { create } from 'zustand';
import { Advertiser, User } from './types';
import { ADVERTISERS, USERS } from './data';

type ProfilesState = {
  currentUser: User;
  currentAdvertiser: Advertiser;
  updateUser: (fields: Partial<User>) => void;
  updateAdvertiser: (fields: Partial<Advertiser>) => void;
};

export const useProfilesStore = create<ProfilesState>()((set) => ({
  currentUser: USERS[0],
  currentAdvertiser: ADVERTISERS[0],

  updateUser: (fields) => set((s) => ({ currentUser: { ...s.currentUser, ...fields } })),

  updateAdvertiser: (fields) => set((s) => ({ currentAdvertiser: { ...s.currentAdvertiser, ...fields } })),
}));