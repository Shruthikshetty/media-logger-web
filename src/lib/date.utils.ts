import { format, isValid, parseISO } from 'date-fns';

/**
 * Formats an ISO date string into a readable format.
 * Uses parseISO to handle local time correctly and isValid to prevent crashes.
 *
 * @param dateStr - The ISO date string to format
 * @param formatStr - The date-fns format string (defaults to 'MMM d, yyyy')
 * @returns The formatted date string or '???' if invalid
 */
export const formatDate = (
  dateStr: string | undefined | null,
  formatStr: string = 'MMM d, yyyy',
): string => {
  if (!dateStr) return '???';

  try {
    const parsed = parseISO(dateStr);

    if (!isValid(parsed)) {
      return '???';
    }

    return format(parsed, formatStr);
  } catch (error) {
    console.error('Error formatting date:', error);
    return '???';
  }
};
