/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "@kentico/gatsby-source-kontent",
      options: {
        projectId: "47de62bb-c3b7-00f7-7e36-e2a76d7be1c7", // Fill in your Project ID
        languageCodenames: [
          "default", // Languages in your project (Project settings -> Localization),
        ],
      },
    },
  ],
}
