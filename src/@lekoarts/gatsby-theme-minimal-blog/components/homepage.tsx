/** @jsx jsx */
import { jsx } from "theme-ui"
import { HeadFC, Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing"
import Hero from "@lekoarts/gatsby-theme-minimal-blog/src/texts/hero.mdx"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import { visuallyHidden } from "@lekoarts/gatsby-theme-minimal-blog/src/styles/utils"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"

export type MBHomepageProps = {
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

const Homepage = ({ posts }: MBHomepageProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()
  const { siteTitle } = useSiteMetadata()

  return (
    <Layout>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      {/* Text-only hero section sourced from texts/hero.mdx (no image) */}
      <section sx={{ mb: [4, 8, 16] }} data-hero-marker="true">
        <Hero />
      </section>
      <Title text="Projects">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>See all projects</Link>
      </Title>
      <Listing posts={posts} showTags={false} />
    </Layout>
  )
}

export default Homepage

export const Head: HeadFC = () => <Seo />
