import { getPageTitle } from '../../src/utils';
import { describe, expect, it } from 'vitest';

describe('utils', () => {
  describe('getPageTitle', () => {
    it('should transform correctly', () => {
      const inputTitle = 'hello';
      const outputTitle = `${inputTitle} | Nájemný programátor`;

      expect(getPageTitle(inputTitle)).toBe(outputTitle);
    });
  });
});
