/**
 * Formats a duration in minutes to a human-readable string.
 * - Under 120 minutes: shows as "X min"
 * - 120 minutes or more: shows as "X.Y hrs" (rounded to 1 decimal)
 *
 * if invalid or 0 or undefined or null it will return "???"
 *
 * @param minutes - The duration in minutes
 * @returns A formatted string
 */
export const formatDuration = (minutes: number): string => {
  if (!minutes || minutes <= 0) return '???';

  // If less than 120 minutes (2 hours), show as minutes
  if (minutes < 120) {
    return `${minutes} min`;
  }

  // If 2 hours or more, show as decimal hours
  const hours = minutes / 60;

  // Format to 1 decimal place, but remove .0 if it's an integer
  const formattedHours = Number(hours.toFixed(1));

  return `${formattedHours} hrs`;
};
