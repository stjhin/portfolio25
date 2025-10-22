import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/gatsby-config.mjs
    siteTitle: `Silvialy Tjhin`,
    siteTitleAlt: `Silvialy Tjhin • Portfolio`,
    siteHeadline: `Silvialy Tjhin • Portfolio`,
    title: `Silvialy Tjhin • Portfolio`,
    siteUrl: `https://stjhin.com/`,
    siteDescription: `Portfolio of Silvialy Tjhin — Designer & UI Developer.`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    author: `@silvialy`,
  },
  trailingSlash: `always`,
  plugins: [
    // 🚨 FIX FOR GATSBY-SOURCE-FILESYSTEM ERROR
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`, // Explicitly source the path
      },
    }, // 🚨 IMPORTANT COMMA TO SEPARATE PLUGINS

    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        blogPath: "/projects",
        navigation: [
          {
            title: `Projects`,
            slug: `/projects`,
          },
        ],
        externalLinks: [
          {
            name: `Linkedin`,
            url: `https://www.linkedin.com/in/silvialy/`,
          },
          {
            name: `Github`,
            url: `https://github.com/stjhin`,
            
          },
          {
            name: `Resume`,
            url: `https://docs.google.com/document/d/e/2PACX-1vQBA0ZEs7LJqJUN0GuSPxoOgIatsZzkssrh9VMelH9fF5Yptz03OhTKLFH1h2YX3axVfAL1m4bI8u8F/pub`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Projects - Silvialy Tjhin`,
        short_name: `projects`,
        description: `Portfolio projects by Silvialy Tjhin.`,
        start_url: `/`,
        background_color: `#f7fbff`,
        // This will impact how browsers show your PWA/website
        // https://css- tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({
              query: { site, allPost },
            }: {
              query: { allPost: IAllPost; site: { siteMetadata: ISiteMetadata } }
            }) =>
              allPost.nodes.map((post) => {
                const url = site.siteMetadata.siteUrl + post.slug
                const content = `<p>${post.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`

                return {
                  title: post.title,
                  date: post.date,
                  excerpt: post.excerpt,
                  url,
                  guid: url,
                  custom_elements: [{ "content:encoded": content }],
                }
              }),
            query: `{
  allPost(sort: {date: DESC}) {
    nodes {
      title
      date(formatString: "YYYY")
      excerpt
      slug
    }
  }
}`,
            output: `rss.xml`,
            title: `Projects - Silvialy Tjhin`,
          },
        ],
      },
    },
    // Note: The theme already sets up Theme UI. If you want to customize it, shadow files under src/gatsby-plugin-theme-ui.
    // You can remove this plugin if you don't need it
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {
        saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
        saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
        open: false,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,