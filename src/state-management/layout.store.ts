/**
 * This file contains the global state for layout
 * that is if the media to be shown in grid or list
 */
import { create } from 'zustand';

// types
export type MediaLayout = 'grid' | 'list';

//type for layout store
type layoutStore = {
  layout: MediaLayout;
  setLayout: (layout: MediaLayout) => void;
  resetLayout: () => void;
};

// define initial state
const initialState = {
  layout: 'grid' as MediaLayout,
};

//create layout store
export const useLayoutStore = create<layoutStore>((set) => ({
  ...initialState,
  /**
   * Sets the current layout
   * @param layout - The layout to set ('grid' | 'list')
   */
  setLayout: (layout) => set({ layout }),
  /**
   * Resets the layout to the default value
   */
  resetLayout: () => set(initialState),
}));
