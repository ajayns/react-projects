// Configure plugins used
// gatsby-source-filesystem is pointed to /src to look for files
// typography.js is configured using /utils/typography

module.exports = {
    siteMetadata: {
        title: `Pandas Eating Lots`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-glamor`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
    ],
};

