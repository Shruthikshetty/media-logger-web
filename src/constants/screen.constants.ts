import env from '@/env';
import {
  Calendar,
  Clapperboard,
  Heart,
  Palette,
  Sparkles,
  TrendingUp,
  TvMinimalPlay,
  Zap,
} from 'lucide-react';

// themes icons options
export const THEME_SELECTOR_OPTIONS = [
  {
    value: 'blurple',
    icon: Sparkles,
  },
  {
    value: 'purple',
    icon: Palette,
  },
  {
    value: 'emerald',
    icon: Zap,
  },
  {
    value: 'rose',
    icon: Heart,
  },
];

export const APP_FOOTER_NAVIGATES = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Games',
    href: '/games',
  },
  {
    title: 'Movies',
    href: '/movies',
  },
  {
    title: 'TV Shows',
    href: '/tv-shows',
  },
] as const;

export const APP_FOOTER_CONTACTS = [
  {
    title: 'GitHub',
    href: env.NEXT_PUBLIC_GITHUB_LINK,
    svg: '/github.svg',
  },
] as const;

export const APP_FOOTER_ATTRIBUTES = [
  {
    title: 'TMDB',
    svg: '/tmdb-attribution.svg',
    href: 'https://www.themoviedb.org/',
  },
  {
    title: 'IGDB',
    svg: '/igdb-attribution.svg',
    href: 'https://www.igdb.com/',
  },
  {
    title: 'RAWG',
    svg: '/rawg-attribution.svg',
    href: 'https://rawg.io/',
  },
] as const;

export const DASHBOARD_TABS = [
  {
    value: 'overview',
    label: 'Overview',
    icon: TrendingUp,
  },
  {
    value: 'timeline',
    label: 'Timeline',
    icon: Calendar,
  },
  {
    value: 'movies',
    label: 'Movies',
    icon: Clapperboard,
    navigate: '/movie',
  },
  {
    value: 'tv-shows',
    label: 'TV Shows',
    icon: TvMinimalPlay,
    navigate: '/tv-show',
  },
];

export const OVERVIEW_QUICK_LINKS = [
  {
    title: '🎮 Browse Games',
    description: 'Discover and track games',
    href: '/games',
  },
  {
    title: '🎬 Browse Movies',
    description: 'Explore and log movies',
    href: '/movie',
  },
  {
    title: '📺 Browse TV Shows',
    description: 'Track your favorite tv shows',
    href: '/tv-show',
  },
];
