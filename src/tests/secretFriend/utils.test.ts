import { describe, expect, it } from 'vitest';
import { drawRandomName } from '../../../features/secretFriend/utils';

describe('drawRandomName', () => {
  it('should return null if array is empty', () => {
    expect(drawRandomName([])).toBeNull();
  });

  it('should return a name from the list', () => {
    const names = ['Alice', 'Bob', 'Charlie'];
    const result = drawRandomName(names);
    expect(names).toContain(result);
  });
});
