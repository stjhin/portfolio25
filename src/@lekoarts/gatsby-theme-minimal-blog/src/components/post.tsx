/** @jsx jsx */
import type { HeadFC } from "gatsby"
import * as React from "react"
import { jsx } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import PostFooter from "@lekoarts/gatsby-theme-minimal-blog/src/components/post-footer"

export type MBPostProps = {
  post: {
    slug: string
    title: string
    date: string
    tags?: { name: string; slug: string }[]
    description?: string
    canonicalUrl?: string
    excerpt: string
    timeToRead?: number
    banner?: { childImageSharp?: { resize?: { src: string } } }
  }
}

const px = [`16px`, `8px`, `4px`]
const shadow = px.map((v) => `rgba(0, 0, 0, 0.1) 0px ${v} ${v} 0px`)

const Post: React.FC<any> = ({ data: { post }, children }) => (
  <Layout>
    <h1 sx={{ variant: `styles.h1` }}>{post.title}</h1>
    <p sx={{ color: `secondary`, mt: 3, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
      <time>{post.date}</time>
      {post.tags && (
        <span>
          {` — `}<ItemTags tags={post.tags} />
        </span>
      )}
      {post.timeToRead && ` — `}
      {post.timeToRead && <span>{post.timeToRead} min read</span>}
    </p>

    {(post.banner?.childImageSharp?.resize?.src || post.banner?.publicURL) && (
      <img
        src={post.banner?.childImageSharp?.resize?.src || post.banner?.publicURL}
        alt={post.title}
        sx={{
          width: "100%",
          height: "auto",
          my: [4, 4, 5],
          borderRadius: 4,
          boxShadow: shadow.join(`, `),
        }}
      />
    )}

    <section
      sx={{
        my: 5,
        ".gatsby-resp-image-wrapper": {
          my: [4, 4, 5],
          borderRadius: `4px`,
          boxShadow: shadow.join(`, `),
          ".gatsby-resp-image-image": { borderRadius: `4px` },
        },
        variant: `layout.content`,
      }}
    >
      {children}
    </section>
    <PostFooter post={post} />
  </Layout>
)

export default Post

export const Head: HeadFC<MBPostProps> = ({ data: { post } }) => (
  <Seo
    title={post.title}
    description={post.description ? post.description : post.excerpt}
    image={post.banner ? post.banner?.childImageSharp?.resize?.src : undefined}
    pathname={post.slug}
    canonicalUrl={post.canonicalUrl}
  />
)
