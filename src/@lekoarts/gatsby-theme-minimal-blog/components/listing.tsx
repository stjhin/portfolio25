/** @jsx jsx */
import { jsx } from "theme-ui"
import BlogListItem from "./blog-list-item"

/**
 * Shadow of the theme's Listing component.
 * Adds a tiny dev-only marker so we can confirm this shadow is active at runtime.
 */

type ListingProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: { name: string; slug: string }[]
  }[]
  className?: string
  showTags?: boolean
}

const Listing = ({ posts, className = ``, showTags = true }: ListingProps) => (
  // Remove large bottom margins on sections (previously 4/8/16rem); keep only item spacing inside
  <section sx={{ mb: 0 }} className={className}>
    {posts.map((post) => (
      <div key={post.slug} sx={{ mb: 4 }}>
        <BlogListItem post={post} showTags={showTags} />
      </div>
    ))}
  </section>
)

export default Listing
