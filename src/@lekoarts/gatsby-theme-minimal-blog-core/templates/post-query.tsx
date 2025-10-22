import { graphql } from "gatsby"
import PostComponent, { Head } from "@lekoarts/gatsby-theme-minimal-blog-core/src/components/post"

export default PostComponent

export { Head }

export const query = graphql`
  query PostYearOnly($slug: String!) {
    post(slug: { eq: $slug }) {
      slug
      title
      date(formatString: "YYYY")
      tags {
        name
        slug
      }
      description
      canonicalUrl
      excerpt
      timeToRead
      banner {
        publicURL
        childImageSharp {
          resize(width: 1200, quality: 90) {
            src
          }
        }
      }
    }
  }
`
