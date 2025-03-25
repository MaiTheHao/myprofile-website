/**
 * Normalizes a string based on the provided options.
 * @param str - The input string to normalize
 * @param options - Array of normalization options to apply
 * @returns The normalized string
 * @remarks
 * Available options:
 * - `trim`: Removes leading and trailing whitespace
 * - `lowercase`: Converts string to lowercase
 * - `removeSpaces`: Removes all whitespace characters
 * - `alphanumeric`: Removes all non-alphanumeric characters
 * - `numeric`: Removes all non-numeric characters
 */
export const normalizeStr = (str: string, options: string[] = []): string => {
  const pipelines: Record<string, (s: string) => string> = {
    trim: (s) => s.trim(),
    lowercase: (s) => s.toLowerCase(),
    removeSpaces: (s) => s.replace(/\s+/g, ''),
    alphanumeric: (s) => s.replace(/[^a-zA-Z0-9]/g, ''),
    numeric: (s) => s.replace(/[^0-9]/g, ''),
  };

  let result = str;
  options.forEach((opt) => {
    if (opt in pipelines) {
      result = pipelines[opt](result);
    }
  });
  return result;
};

export const isEqualStr = (a: string, b: string): boolean => {
  a = normalizeStr(a, ['removeSpaces', 'lowercase']);
  b = normalizeStr(b, ['removeSpaces', 'lowercase']);
  return a === b;
};

export const notEqualStr = (a: string, b: string): boolean => {
  return !isEqualStr(a, b);
};