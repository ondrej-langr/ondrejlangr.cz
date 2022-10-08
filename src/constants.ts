import { Tags } from './types';

export const projectsList = [
  {
    title: 'Larokinvest',
    url: 'https://larokinvest.cz/',
    tags: [Tags['custom-cms'], Tags.webpage],
    imageUrl: require('@/assets/projects/work/larok.png'),
  },
  {
    title: 'Pohadkovyzamek',
    url: 'https://pohadkovy-zamek.cz/',
    tags: [Tags.eshop, Tags.webpage],
    imageUrl: require('@/assets/projects/work/zamek.png'),
  },

  {
    title: 'Plantae',
    url: 'https://plantae-lukavec.cz/obchod/',
    tags: [Tags.eshop, Tags.webpage],
    imageUrl: require('@/assets/projects/work/plantae.png'),
  },
  {
    title: 'Badadovolena',
    url: 'http://badadovolena.cz/hlavni/',
    tags: [Tags.webpage],
    imageUrl: require('@/assets/projects/work/badadovolena.png'),
  },

  {
    title: 'Decorasi',
    url: 'http://decorasi.cz/',
    tags: [Tags.webpage, Tags.eshop],
    imageUrl: require('@/assets/projects/work/decorasi.png'),
  },
  {
    title: 'Svobodnilezci',
    url: 'https://www.svobodnilezci.com/',
    tags: [Tags.webpage, Tags.blog],
    imageUrl: require('@/assets/projects/work/svobodni.png'),
  },

  {
    title: 'Pragaleto',
    url: 'https://pragaleto.cz/',
    tags: [Tags.webpage],
    imageUrl: require('@/assets/projects/work/pragaleto.png'),
  },
];
