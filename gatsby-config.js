module.exports = {
    siteMetadata: {
        title: "demusic",
        siteUrl: "https://demusic.info",
        description: "Decentralized Music Streaming Platform.",
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
