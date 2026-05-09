import { StateCreator } from 'zustand';

import { UISlice } from './slices/uiSlice';
import { PersistOptions } from 'zustand/middleware';

export type StoreState = UISlice;

export type SliceCreator<T> = StateCreator<
  StoreState,
  [['zustand/persist', unknown], ['zustand/devtools', never]],
  [],
  T
>;

export type PersistConfig = PersistOptions<StoreState>;

export type StoreType = StoreState;