const path = require("path")

module.exports = {
  siteMetadata: {
    title: "ZAP.DEV",
    description: "Portfolio site",
    author: "@CarloNomes",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        common: path.join(__dirname, "src", "components", "common"),
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "ZAP.DEV",
        short_name: "ZAP.DEV",
        start_url: "/",
        background_color: "#fafafa",
        theme_color: "#f4d75a",
        display: "fullscreen",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-offline",
  ],
}
