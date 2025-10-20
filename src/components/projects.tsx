/** @jsx jsx */
import { jsx } from "theme-ui"
import { HeadFC, Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"

export type ProjectsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

const Project = ({ posts }: ProjectsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  return (
    <Layout>
      <div sx={{ display: `flex`, alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
        <h1 sx={{ variant: `styles.h1`, my: 2 }}>Projects</h1>
        <Link
          sx={(t) => ({ ...t.styles?.a, variant: `links.secondary`, my: 2 })}
          to={replaceSlashes(`/${basePath}/${tagsPath}`)}
        >
          View all tags
        </Link>
      </div>
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
    </Layout>
  )
}

export default Project

export const Head: HeadFC = () => <Seo title="Projects" />
