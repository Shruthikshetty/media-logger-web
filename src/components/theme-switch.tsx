'use client';
import { useTheme } from 'next-themes';
import { APP_THEMES } from '../constants/config.constants';


/**
 * A dropdown select component to switch between different themes
 * @returns {JSX.Element} A dropdown select component
 */
export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <select
      value={theme || 'blurple'}
      onChange={(e) => setTheme(e.target.value)}
      className="bg-background text-foreground rounded border p-2"
    >
      {APP_THEMES.map((theme) => (
        <option key={theme} value={theme}>
          {theme}
        </option>
      ))}
    </select>
  );
}
