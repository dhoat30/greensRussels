require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: `/russell`,
  siteMetadata: {
    siteUrl: "https://greensnz.com/russell/",
    title: "Greens Indian & Thai Restaurant Russel",
    description: "Come to Greens with family and friends and enjoy the most traditional and authentic Thai and Indian cuisine menu served fresh and hot.",
    author: "Gurpreet Singh Dhoat"

  },
  plugins: [

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Delhi 6 Paihia`,
        short_name: `Delhi 6`,
        start_url: `/`,
        icon: `src/images/icon.png`
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: process.env.WORDPRESS_GRAPH,
      },
    },
    "gatsby-plugin-styled-components",
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Della Respira`,
    //         variants: [`400`],
    //       },
    //       {
    //         family: `Poppins`,
    //         variants: [`100`, `200`, '300', '400', '500', '600', '700', '800', '900']
    //       },
    //       {
    //         family: `Zen Tokyo Zoo`,
    //         variants: [`400`],
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins`,
          `source sans-serif pro\:100,200,300,400,500,600,700,900` // you can also specify font weights and styles
        ],
        fonts: [
          `Playfair Display`,
          `source sans pro\:400,500,600,700,800,900 ` // you can also specify font weights and styles
        ],
        fonts: [
          `Zen Tokyo Zoo`,
          `source sans pro\:400` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
};
