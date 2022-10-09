import { Tags } from './types';

import larokSiteScreenshotUrl from './assets/projects/larok.png';
import pohadkovyZamekScreenshotUrl from './assets/projects/zamek.png';
import plantaeScreenshotUrl from './assets/projects/plantae.png';
import badadovolenaScreenshot from './assets/projects/badadovolena.png';
import decorasiScreenshot from './assets/projects/decorasi.png';
import svobodniScreenshot from './assets/projects/svobodni.png';
import pragaletoScreenshot from './assets/projects/pragaleto.png';

export const projectsList = [
  {
    title: 'Larokinvest',
    url: 'https://larokinvest.cz/',
    tags: [Tags['custom-cms'], Tags.webpage],
    imageUrl: larokSiteScreenshotUrl,
  },
  {
    title: 'Pohadkovyzamek',
    url: 'https://pohadkovy-zamek.cz/',
    tags: [Tags.eshop, Tags.webpage],
    imageUrl: pohadkovyZamekScreenshotUrl,
  },

  {
    title: 'Plantae',
    url: 'https://plantae-lukavec.cz/obchod/',
    tags: [Tags.eshop, Tags.webpage],
    imageUrl: plantaeScreenshotUrl,
  },
  {
    title: 'Badadovolena',
    url: 'http://badadovolena.cz/hlavni/',
    tags: [Tags.webpage],
    imageUrl: badadovolenaScreenshot,
  },

  {
    title: 'Decorasi',
    url: 'http://decorasi.cz/',
    tags: [Tags.webpage, Tags.eshop],
    imageUrl: decorasiScreenshot,
  },
  {
    title: 'Svobodnilezci',
    url: 'https://www.svobodnilezci.com/',
    tags: [Tags.webpage, Tags.blog],
    imageUrl: svobodniScreenshot,
  },
  {
    title: 'Pragaleto',
    url: 'https://pragaleto.cz/',
    tags: [Tags.webpage],
    imageUrl: pragaletoScreenshot,
  },
];
