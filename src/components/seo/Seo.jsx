import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import appleIcon57 from "../../imports/assets/favicon/apple-icon-57x57.png";
import appleIcon60 from "../../imports/assets/favicon/apple-icon-60x60.png";
import appleIcon72 from "../../imports/assets/favicon/apple-icon-72x72.png";
import appleIcon76 from "../../imports/assets/favicon/apple-icon-76x76.png";
import appleIcon114 from "../../imports/assets/favicon/apple-icon-114x114.png";
import appleIcon120 from "../../imports/assets/favicon/apple-icon-120x120.png";
import appleIcon144 from "../../imports/assets/favicon/apple-icon-144x144.png";
import appleIcon152 from "../../imports/assets/favicon/apple-icon-152x152.png";
import appleIcon180 from "../../imports/assets/favicon/apple-icon-180x180.png";
import androidIcon36 from "../../imports/assets/favicon/android-icon-192x192.png";
import favIcon32 from "../../imports/assets/favicon/favicon-32x32.png";
import favIcon96 from "../../imports/assets/favicon/favicon-96x96.png";
import favIcon16 from "../../imports/assets/favicon/favicon-16x16.png";
import msIcon144 from "../../imports/assets/favicon/ms-icon-144x144.png";

import manifest from "../../imports/assets/favicon/manifest.json";

function Seo({ description, lang, meta, image: metaImage, title }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        keywords
                        siteUrl
                    }
                }
            }
        `,
    );

    const metaDescription = description || site.siteMetadata.description;
    const image =
        metaImage && metaImage.src
            ? `${site.siteMetadata.siteUrl}${metaImage.src}`
            : null;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            link={[
                { rel: "apple-touch-icon", sizes: "57x75", href: appleIcon57 },
                { rel: "apple-touch-icon", sizes: "60x60", href: appleIcon60 },
                { rel: "apple-touch-icon", sizes: "72x72", href: appleIcon72 },
                { rel: "apple-touch-icon", sizes: "76x76", href: appleIcon76 },
                {
                    rel: "apple-touch-icon",
                    sizes: "114x114",
                    href: appleIcon114,
                },
                {
                    rel: "apple-touch-icon",
                    sizes: "120x120",
                    href: appleIcon120,
                },
                {
                    rel: "apple-touch-icon",
                    sizes: "144x144",
                    href: appleIcon144,
                },
                {
                    rel: "apple-touch-icon",
                    sizes: "152x152",
                    href: appleIcon152,
                },
                {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: appleIcon180,
                },
                { rel: "icon", sizes: "36x36", href: androidIcon36 },
                { rel: "icon", sizes: "32x32", href: favIcon32 },
                { rel: "icon", sizes: "96x96", href: favIcon96 },
                { rel: "icon", sizes: "16x16", href: favIcon16 },
                { rel: "msapplication-TileColo", content: "#ffffff" },
                { rel: "msapplication-TileImage", content: msIcon144 },
                { rel: "theme-color", content: "#ffffff" },
            ]}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    name: "keywords",
                    content: site.siteMetadata.keywords.join(","),
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ]
                .concat(
                    metaImage
                        ? [
                              {
                                  property: "og:image",
                                  content: image,
                              },
                              {
                                  property: "og:image:width",
                                  content: metaImage.width,
                              },
                              {
                                  property: "og:image:height",
                                  content: metaImage.height,
                              },
                              {
                                  name: "twitter:card",
                                  content: "summary_large_image",
                              },
                          ]
                        : [
                              {
                                  name: "twitter:card",
                                  content: "summary",
                              },
                          ],
                )
                .concat(meta)}
        />
    );
}

Seo.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
};

Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
    }),
};

export default Seo;
