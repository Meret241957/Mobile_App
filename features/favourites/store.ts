import { create } from 'zustand';

type FavouritesState = {
  ids: string[];
  toggle: (id: string) => void;
};

export const useFavouritesStore = create<FavouritesState>()((set) => ({
  ids: [],

  toggle: (id) =>
    set((s) => ({
      ids: s.ids.includes(id) ? s.ids.filter((item) => item !== id) : [...s.ids, id],
    })),
}));