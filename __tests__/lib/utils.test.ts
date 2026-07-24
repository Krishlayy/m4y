import { cn } from '@/lib/utils';

describe('cn function', () => {
  it('merges tailwind classes correctly', () => {
    expect(cn('px-2 py-1', 'bg-red-500')).toBe('px-2 py-1 bg-red-500');
  });

  it('handles conditional classes', () => {
    const isTrue = true;
    const isFalse = false;
    expect(cn('px-2', isTrue && 'bg-red-500', isFalse && 'text-white')).toBe('px-2 bg-red-500');
  });

  it('resolves tailwind conflicts', () => {
    // twMerge should resolve the conflict, keeping the last class
    expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500');
    expect(cn('px-2', 'px-4')).toBe('px-4');
  });
});
