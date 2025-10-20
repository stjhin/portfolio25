import { graphql } from "gatsby"
import HomepageComponent from "@lekoarts/gatsby-theme-minimal-blog-core/src/components/homepage"
export { Head } from "@lekoarts/gatsby-theme-minimal-blog-core/src/components/homepage"

export default HomepageComponent

export const query = graphql`
  query ($formatString: String!) {
    allPost(sort: { date: DESC }, limit: 3) {
      nodes {
        slug
        title
        date(formatString: $formatString)
        excerpt
        timeToRead
        description
        tags {
          name
          slug
        }
      }
    }
  }
`
