// This deep-path template shadow is intentionally query-less to avoid Gatsby
// "GraphQL query in non-page component" warnings. The actual page template is
// shadowed at: src/@lekoarts/gatsby-theme-minimal-blog-core/templates/blog-query.tsx
// Re-export the component and Head without defining a page query here.
export { default, Head } from "../../templates/blog-query"
