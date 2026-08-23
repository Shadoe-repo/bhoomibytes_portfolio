export const SIZE_SCALE: number[] = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8];

const STEP_TO_REM: Record<number, string> = {
  [-4]: '0.75rem',
  [-3]: '0.875rem',
  [-2]: '1rem',
  [-1]: '1.125rem',
  [0]: '1.25rem',
  [1]: '1.5rem',
  [2]: '1.875rem',
  [3]: '2.25rem',
  [4]: '3rem',
  [5]: '3.75rem',
  [6]: '4.5rem',
  [7]: '6rem',
  [8]: '8rem',
};

const FONT_SIZE_LINE_HEIGHT: Record<string, string> = {
  '0.75rem': '1rem',
  '0.875rem': '1.25rem',
  '1rem': '1.5rem',
  '1.125rem': '1.75rem',
  '1.25rem': '1.75rem',
  '1.5rem': '2rem',
  '1.875rem': '2.25rem',
  '2.25rem': '2.5rem',
  '3rem': '1',
  '3.75rem': '1',
  '4.5rem': '1',
  '6rem': '1',
  '8rem': '1',
};

export function remForSizeClass(sizeIndex: number): string {
  return STEP_TO_REM[sizeIndex] ?? '1rem';
}

export function lineHeightForFontSize(rem: string): string {
  return FONT_SIZE_LINE_HEIGHT[rem] ?? '1.5';
}
