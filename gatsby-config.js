module.exports = {
    siteMetadata: {
        title: "DeMusic",
        siteUrl: "https://demusic.it",
        description: "Live your passion for music in a completely revolutionary way, support your favorite artists in a transparent and verifiable way",
        author: "BCode Srl",
        keywords: ["music", "blockchain", "decentralization"],
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /svg/, // See below to configure properly
                },
            },
        },
    ],
};
