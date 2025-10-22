/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"

type BlogListItemProps = {
  post: {
    slug: string
    title: string
    date: string
    excerpt?: string
    description?: string
    timeToRead?: number
    tags?: { name: string; slug: string }[]
    banner?: {
      publicURL?: string
      childImageSharp?: { resize?: { src: string } }
    }
  }
  showTags?: boolean
}

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => {
  const thumb = post.banner?.childImageSharp?.resize?.src || post.banner?.publicURL
  return (
    <div sx={{ mb: 4, display: `flex`, gap: 3, alignItems: `flex-start` }}>
      {thumb && (
        <Link to={post.slug} sx={{ display: `block`, flex: `0 0 auto` }} aria-label={`${post.title} thumbnail`}>
          <img
            src={thumb}
            alt={post.title}
            sx={{ width: 128, height: 80, objectFit: `cover`, borderRadius: 3, boxShadow: `0 2px 6px rgba(0,0,0,0.12)` }}
          />
        </Link>
      )}
      <div sx={{ flex: `1 1 auto` }}>
        <Link to={post.slug} sx={(t) => ({ ...t.styles?.a, fontSize: [1, 2, 3], color: `text` })}>
          {post.title}
        </Link>
        <p sx={{ color: `secondary`, mt: 1, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
          <time>{post.date}</time>
        </p>
      </div>
    </div>
  )
}

export default BlogListItem
