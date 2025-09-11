import { cn } from './utils';

describe('cn', () => {
  it('should merge and deduplicate class names', () => {
    expect(cn('bg-red-500', 'text-white', 'bg-blue-500')).toBe('text-white bg-blue-500');
  });

  it('should handle conditional classes', () => {
    expect(cn('p-4', { 'font-bold': true, 'italic': false })).toBe('p-4 font-bold');
  });

  it('should handle empty and falsy values', () => {
    expect(cn('p-4', null, undefined, false, '')).toBe('p-4');
  });
});
