module.exports = (phase, { defaultConfig }) => {

    return {
        future: {
            webpack5: true,
        },
        env: {
            // Course Catalogue Prefix for uSask
            catalogue_prefix: 'https://catalogue.usask.ca/',

            // API to query
            graphql_page: "https://api.bradendubois.dev/",
        }
    }
}