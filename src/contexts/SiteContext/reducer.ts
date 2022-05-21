import { Reducer } from 'react';
import { SiteContextValues } from './types';
import { SiteContextReducerPayload } from './types/SiteContextReducerPayload';

export const reducer: Reducer<SiteContextValues, SiteContextReducerPayload> = (
  prevState,
  { key, value }
) => {
  return { ...prevState, [key]: value };
};
