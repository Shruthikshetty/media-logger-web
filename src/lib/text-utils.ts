/**
 * contains utils related to text formatting
 */

export const getProfileFallback = (name?: string): string => {
  if (!name || typeof name !== 'string') return '??';

  const initials = name
    .trim()
    .split(/\s+/) // Splits by any whitespace (handles multiple spaces)
    .map((part) => part[0]) // Grabs the first character
    .filter(Boolean) // Removes any empty strings
    .join('')
    .toUpperCase();

  return initials.length > 2 ? initials.substring(0, 2) : initials;
};
