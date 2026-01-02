import { create } from 'zustand';

type ThemeName = 'chronos' | 'hades';

interface ThemeStore {
  themeName: ThemeName;
  toggleTheme: () => void;
}

// Theme config for favicon and title
const themeConfig = {
  chronos: { favicon: '/hourglass.svg', title: 'Death to Chronos' },
  hades: { favicon: '/hades_sigil.webp', title: 'Domain of Hades' }
};

// Apply theme: CSS, favicon, and title
const applyTheme = (theme: ThemeName) => {
  const config = themeConfig[theme];
  
  // CSS variables
  document.documentElement.setAttribute('data-theme', theme);
  
  // Favicon
  const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
  if (favicon) favicon.href = config.favicon;
  
  // Page title
  document.title = config.title;
};

const DEFAULT_THEME: ThemeName = 'chronos';

applyTheme(DEFAULT_THEME);

export const useThemeStore = create<ThemeStore>((set) => ({
  themeName: DEFAULT_THEME,
  
  toggleTheme: () => set((state) => {
    const newTheme = state.themeName === 'chronos' ? 'hades' : 'chronos';
    applyTheme(newTheme);
    return { themeName: newTheme };
  }),
}));

export type { ThemeName };