module.exports = (phase, { defaultConfig }) => {

    return {
        env: {
            // Course Catalogue Prefix for uSask
            catalogue_prefix: 'https://catalogue.usask.ca/',

            // API to query
            graphql_page: "https://api.bradendubois.dev/",
        }
    }
}