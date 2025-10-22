import * as React from "react"
import { graphql } from "gatsby"
import Projects, { Head as ProjectsHead } from "../../../components/projects"

type Props = {
  data: {
    allPost: {
      nodes: any[]
    }
  }
  [key: string]: any
}

export default function ProjectsListingPage({ data, ...rest }: Props) {
  const { allPost } = data
  return <Projects posts={allPost.nodes} {...rest} />
}

export const Head = ProjectsHead

export const query = graphql`
  query ProjectsListingQueryYearOnly {
    allPost(sort: { date: DESC }) {
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
