import { useContext } from 'react';
import { SiteContextInstance } from '../SiteContextInstance';

export const useSiteContext = () => useContext(SiteContextInstance);
