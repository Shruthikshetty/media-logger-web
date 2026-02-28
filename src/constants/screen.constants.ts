import env from '@/env';
import { time } from 'console';
import { Heart, Palette, Sparkles, Zap } from 'lucide-react';

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
