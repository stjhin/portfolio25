import { graphql } from "gatsby"
import HomepageComponent from "@lekoarts/gatsby-theme-minimal-blog-core/src/components/homepage"
export { Head } from "@lekoarts/gatsby-theme-minimal-blog-core/src/components/homepage"

export default HomepageComponent

export const query = graphql`
  query HomepageYearOnly {
    allPost(sort: { date: DESC }, limit: 3) {
      nodes {
        slug
        title
        date(formatString: "YYYY")
        excerpt
        timeToRead
        description
        banner {
          publicURL
          childImageSharp {
            resize(width: 800, quality: 80) {
              src
            }
          }
        }
        tags {
          name
          slug
        }
      }
    }
  }
`
