/** @jsx jsx */
import { jsx } from "theme-ui"
import type { PageProps } from "gatsby"
import ThemedHomepage, { Head as ThemedHead } from "@lekoarts/gatsby-theme-minimal-blog/src/components/homepage"

// Shape of the data returned by the homepage GraphQL query
type Data = {
  allPost: {
    nodes: Array<{
      slug: string
      title: string
      date: string
      excerpt: string
      description: string
      timeToRead?: number
      tags?: { name: string; slug: string }[]
      banner?: {
        publicURL?: string
        childImageSharp?: { resize?: { src: string } | null } | null
      } | null
    }>
  }
}

export const Head = ThemedHead

export default function Homepage({ data }: PageProps<Data>) {
  const posts = data.allPost.nodes
  return <ThemedHomepage posts={posts} />
}
