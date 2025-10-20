/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { Link } from "gatsby"
import useMinimalBlogConfig from "../../hooks/use-minimal-blog-config"
import replaceSlashes from "../../utils/replaceSlashes"
import Layout from "../../components/layout"
import Hero from "../../components/hero"
import Seo from "../../components/seo"
import Listing from "../../components/listing"
import Title from "../../components/title"
import { HeadFC } from "gatsby"

const visuallyHidden = {
  border: 0,
  clip: `rect(0 0 0 0)`,
  height: `1px`,
  margin: `-1px`,
  overflow: `hidden`,
  padding: 0,
  position: `absolute` as const,
  width: `1px`,
}

type MBHomepageProps = {
  posts: {
    slug: string
    title: string
    date?: string
    tags?: {
      name: string
      slug: string
    }[]
    excerpt?: string
    description?: string
    timeToRead?: number
  }[]
}

const Homepage = ({ posts }: MBHomepageProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()

  return (
    <Layout>
      <h1 sx={visuallyHidden}>Home</h1>
      <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 2 }, variant: `section_hero` }}>
        <Hero />
      </section>
      <Title text="Projects">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>See all Projects</Link>
      </Title>
      <Listing posts={posts} showTags={false} />
    </Layout>
  )
}

export default Homepage

export const Head: HeadFC = () => <Seo />
