import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';
import { StoreState } from './types';

import { createUISlice } from './slices/uiSlice';

const useStore = create<StoreState>()(
  devtools(
    persist(
      (...args) => ({
        ...createUISlice(...args),
      }),
      {
        name: 'portfolio-storage', // Changed from 'ecommerce-storage'
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
          theme: state.theme,
          isDarkMode: state.isDarkMode,
        }),
      }
    ),
    { name: 'PortfolioStore' } // Changed from 'EcommerceStore'
  )
);

export default useStore;

// UI Selectors
export const useIsDarkMode = () => useStore((state) => state.isDarkMode);
export const useTheme = () => useStore((state) => state.theme);
export const useIsMobileMenuOpen = () => useStore((state) => state.isMobileMenuOpen); // Added 'Is' prefix

// UI Action Selectors
export const useToggleDarkMode = () => useStore((state) => state.toggleDarkMode);
export const useSetTheme = () => useStore((state) => state.setTheme);
export const useToggleMobileMenu = () => useStore((state) => state.toggleMobileMenu);
export const useOpenMobileMenu = () => useStore((state) => state.openMobileMenu);
export const useCloseMobileMenu = () => useStore((state) => state.closeMobileMenu);

export const useEffectiveTheme = () => {
  const theme = useTheme();
  const isDarkMode = useIsDarkMode();
  
  if (theme === 'system') {
    return isDarkMode ? 'dark' : 'light';
  }
  return theme;
};