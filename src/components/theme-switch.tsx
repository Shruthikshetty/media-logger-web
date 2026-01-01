'use client';
import { useTheme } from 'next-themes';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import { ClientOnly } from './client-only';
import { THEME_SELECTOR_OPTIONS } from '../constants/screen.constants';

/**
 * A dropdown select component to switch between different themes
 * @returns {JSX.Element} A dropdown select component
 */
export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <ClientOnly>
      <ToggleGroup
        variant={'outline'}
        type="single"
        onValueChange={(value) => {
          if (value) setTheme(value);
        }}
        value={theme ?? THEME_SELECTOR_OPTIONS[0].value}
      >
        {THEME_SELECTOR_OPTIONS.map((option) => (
          <ToggleGroupItem
            key={option.value}
            value={option.value}
            className="data-[state=on]:bg-primary bg-gray-500/20"
          >
            <option.icon className="h-4 w-4" />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </ClientOnly>
  );
}
