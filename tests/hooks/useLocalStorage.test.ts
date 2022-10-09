import {
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  SpyInstance,
  vitest,
} from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '@/hooks';
import '@testing-library/dom';

describe('hooks', () => {
  describe('useLocalStorage', () => {
    let localStorageGetSpy: SpyInstance<[key: string], string>;
    let localStorageSetSpy: SpyInstance<[key: string, value: string], void>;

    beforeAll(() => {
      localStorageGetSpy = vitest.spyOn(Storage.prototype, 'getItem');
      localStorageSetSpy = vitest.spyOn(Storage.prototype, 'setItem');
    });

    beforeEach(() => {
      localStorageGetSpy.mockReset();
      localStorageSetSpy.mockReset();
    });

    it('should return value when not defined', () => {
      const key = 'key';
      const initialValue = 'value';
      localStorageGetSpy.mockReturnValue(null);

      const { result } = renderHook(() => useLocalStorage(key, initialValue));

      expect(localStorageGetSpy).toBeCalledWith(key);
      expect(result.current[0]).toBe(initialValue);
    });

    it('setValue should accept new value or function as parameter', async () => {
      const key = 'key';
      const initialValue = 'value';

      const { result, rerender } = renderHook(() =>
        useLocalStorage(key, initialValue)
      );

      const setItem = result.current[1];
      const newValue = 'newValue';

      act(() => {
        // @ts-ignore
        setItem(newValue);
        rerender();
      });

      expect(localStorageSetSpy).toBeCalledWith(key, JSON.stringify(newValue));
      expect(result.current[0]).toBe(newValue);

      act(() => {
        setItem((prevValue) => newValue);
        rerender();
      });

      expect(localStorageSetSpy).toBeCalledWith(key, JSON.stringify(newValue));
      expect(result.current[0]).toBe(newValue);
    });
  });
});
