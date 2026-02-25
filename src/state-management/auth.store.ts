/**
 * This file contains the global state containing the user authentication info
 */
import { create } from 'zustand';

//type for user
export interface User {
  _id: string;
  name: string;
  email: string;
  profileImg: string;
  role: string;
  xp: number;
  location: string;
  bio: string;
  createdAt: string;
  updatedAt: string;
  lastLogin?: string;
}

//type of auth store
type authStore = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  resetAuth: () => void;
};

// define initial state
const initialState = {
  isLoggedIn: false,
  user: null,
};

//create auth store
export const useAuthStore = create<authStore>((set) => ({
  ...initialState,
  /**
   * handler to set isLoggedIn
   */
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  /**
   * handler to set user
   */
  setUser: (user: User | null) => set({ user }),
  /**
   * reset the store
   */
  resetAuth: () => set(initialState),
}));
