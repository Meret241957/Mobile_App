import { create } from 'zustand';
import { Property } from './types';
import { PROPERTIES } from './data';

type PropertiesState = {
  properties: Property[];
  addProperty: (p: Property) => void;
  removeProperty: (id: string) => void;
};

export const usePropertiesStore = create<PropertiesState>()((set) => ({
  properties: PROPERTIES,

  addProperty: (p) => set((s) => ({ properties: [...s.properties, p] })),

  removeProperty: (id) => set((s) => ({ properties: s.properties.filter((p) => p.id !== id) })),
}));