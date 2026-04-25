/**
 * function to validated number and set undefined if empty
 */

export const handleNumberChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  fn: (value: number | undefined) => void,
) => {
  const isNaN = Number.isNaN(Number(e.target?.value));
  const val = e.target?.value;
  fn(val === '' || isNaN ? undefined : Number(val));
};

/**
 * function to validated string and set undefined if empty
 */

export const handleStringChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  fn: (value: string | undefined) => void,
) => {
  const val = e.target?.value;
  fn(val === '' ? undefined : val);
};
