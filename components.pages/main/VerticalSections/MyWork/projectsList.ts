enum Tags {
  "webpage" = "Webpage",
  "eshop" = "Eshop",
  "custom-cms" = "Custom CMS",
  "blog" = "Blog",
}

export default [
  {
    title: "Larokinvest",
    url: "https://larokinvest.cz/",
    tags: [Tags["custom-cms"], Tags.webpage],
    imageUrl: require("../../../../public/work/larok.png"),
  },
  {
    title: "Pohadkovyzamek",
    url: "https://pohadkovy-zamek.cz/",
    tags: [Tags.eshop, Tags.webpage],
    imageUrl: require("../../../../public/work/zamek.png"),
  },

  {
    title: "Plantae",
    url: "https://plantae-lukavec.cz/obchod/",
    tags: [Tags.eshop, Tags.webpage],
    imageUrl: require("../../../../public/work/plantae.png"),
  },
  {
    title: "Badadovolena",
    url: "http://badadovolena.cz/hlavni/",
    tags: [Tags.webpage],
    imageUrl: require("../../../../public/work/badadovolena.png"),
  },

  {
    title: "Decorasi",
    url: "http://decorasi.cz/",
    tags: [Tags.webpage, Tags.eshop],
    imageUrl: require("../../../../public/work/decorasi.png"),
  },
  {
    title: "Svobodnilezci",
    url: "https://www.svobodnilezci.com/",
    tags: [Tags.webpage, Tags.blog],
    imageUrl: require("../../../../public/work/svobodni.png"),
  },

  {
    title: "Pragaleto",
    url: "https://pragaleto.cz/",
    tags: [Tags.webpage],
    imageUrl: require("../../../../public/work/pragaleto.png"),
  },
];
